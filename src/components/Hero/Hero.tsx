import { useState, useEffect, useContext } from 'react'

import { WeatherContext } from 'contexts/WeatherContext'
import API from 'services/API'
import { parseDate } from 'helpers/DateHelper'
import { WeatherProps } from './types'
import * as S from './styles'

export default function Hero() {
  const [weatherProps, setWeatherProps] = useState<WeatherProps>()
  const [isOpen, setIsOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const [lattlong, setLattlong] = useState('')
  const [empty, setEmpty] = useState(false)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasGeo, setHasGeo] = useState(false)

  const { weather, addWeather } = useContext(WeatherContext)

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        setHasGeo(true)
        setLattlong(`${position.coords.latitude},${position.coords.longitude}`)
      })
    } else {
      setHasGeo(false)
    }
  }, [])

  useEffect(() => {
    const todayWeatherData = weather.consolidated_weather[0]
    setWeatherProps({
      city: weather.title,
      todayDate: parseDate(weather.time),
      weatherStatus: todayWeatherData.weather_state_name,
      temperature: parseInt(todayWeatherData.the_temp.toString()),
      iconSrc: `/${todayWeatherData.weather_state_name.replace(/ /g, '')}.png`
    })
  }, [weather])

  useEffect(() => {
    if (searchTerm) {
      API.get(`/location/search/?query=${searchTerm}`)
        .then((res) => {
          setLocations(res.data)
          if (res.data < 1) {
            setEmpty(true)
          }
        })
        .catch(() => setError(true))
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [searchTerm])

  useEffect(() => {
    handleLocation()
  }, [lattlong])

  useEffect(() => {
    if (location) {
      API.get(`/location/${location}`)
        .then((res) => {
          addWeather(res.data)
          if (res.data === weather) console.log('ok')
        })
        .catch(() => setError(true))
        .finally(() => {
          setIsLoading(false)
          setIsOpen(false)
        })
    }
  }, [location])

  useEffect(() => {
    if (!isOpen) {
      setLocations([])
      setIsLoading(false)
    }
  }, [isOpen])

  const handleSearch = () => {
    setSearchTerm(inputValue)
    setEmpty(false)
    if (inputValue) setIsLoading(true)
  }

  const handleLocation = () => {
    if (lattlong) {
      API.get(`/location/search/?lattlong=${lattlong}`).then((res) =>
        setLocation(res.data[0].woeid)
      )
    }
  }

  const weatherImage =
    isLoading || !location ? '/Loader.gif' : weatherProps?.iconSrc

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.SearchButton onClick={() => setIsOpen(true)}>
            Search for places
          </S.SearchButton>
          {hasGeo && (
            <S.LocationButton onClick={() => handleLocation()}>
              <img src="/Location.png" alt="Location icon" />
            </S.LocationButton>
          )}
        </S.Header>
        <S.WeatherBox>
          <S.WeatherImage>
            <img src={weatherImage && weatherImage} alt="Weather Image" />
          </S.WeatherImage>
          <S.WeatherData>
            <S.Temperature>
              {weatherProps?.temperature}
              <span>ºC</span>
            </S.Temperature>
          </S.WeatherData>
          <S.TemperatureSubtitle>
            {location
              ? weatherProps?.weatherStatus
              : 'allow location on device or search for a place'}
          </S.TemperatureSubtitle>
        </S.WeatherBox>
        <S.Footer>
          <S.TodayDate>Today • {weatherProps?.todayDate}</S.TodayDate>
          <S.Location>
            <img src="/Pin.png" alt="Map Pin image" />
            <p>{weatherProps?.city}</p>
          </S.Location>
        </S.Footer>
      </S.Main>
      {isOpen && (
        <S.Search>
          <S.CloseButton onClick={() => setIsOpen(false)}>✖</S.CloseButton>
          <S.SearchBox>
            <S.SearchInput
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="search location"
            />
            <S.SearchAction onClick={() => handleSearch()}>
              {isLoading ? 'Loading...' : 'Search'}
            </S.SearchAction>
          </S.SearchBox>
          {locations && (
            <S.LocationList>
              {locations.map(({ woeid, title }) => (
                <S.LocationItem
                  key={woeid}
                  onClick={() => {
                    setIsLoading(true)
                    setLocation(woeid)
                  }}
                >
                  {title}
                </S.LocationItem>
              ))}
            </S.LocationList>
          )}
          {empty && <S.Warning>location not available</S.Warning>}
          {error && <S.Warning>Sorry, we couldnt get responses</S.Warning>}
        </S.Search>
      )}
    </S.Container>
  )
}
