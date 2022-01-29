import { useState, useEffect, useContext } from 'react'

import { WeatherContext } from 'contexts/WeatherContext'

import API from 'services/API'

import { parseDate } from 'helpers/DateHelper'

import { WeatherProps } from './types'
import * as S from './styles'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  const [weatherProps, setWeatherProps] = useState<WeatherProps>()
  const [inputValue, setInputValue] = useState<string>('')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState('')
  const { weather, addWeather } = useContext(WeatherContext)

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
      API.get(`/location/search/?query=${searchTerm}`).then((res) =>
        setLocations(res.data)
      )
    }
  }, [searchTerm])

  useEffect(() => {
    if (location) {
      API.get(`/location/${location}`).then((res) => {
        addWeather(res.data)
      })
      setIsOpen(false)
    }
  }, [location])

  const handleSearch = () => {
    setSearchTerm(inputValue)
  }

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.SearchButton onClick={() => setIsOpen(true)}>
            Search for places
          </S.SearchButton>
          <S.LocationButton>
            <img src="/Location.png" alt="Location icon" />
          </S.LocationButton>
        </S.Header>
        <S.WeatherBox>
          <S.WeatherImage>
            <img src={weatherProps?.iconSrc} alt="Weather Image" />
          </S.WeatherImage>
          <S.WeatherData>
            <S.Temperature>
              {weatherProps?.temperature}
              <span>ºC</span>
            </S.Temperature>
          </S.WeatherData>
          <S.TemperatureSubtitle>
            {weatherProps?.weatherStatus}
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
              Search
            </S.SearchAction>
          </S.SearchBox>
          {locations && (
            <S.LocationList>
              {locations.map(({ woeid, title }) => (
                <S.LocationItem key={woeid} onClick={() => setLocation(woeid)}>
                  {title}
                </S.LocationItem>
              ))}
            </S.LocationList>
          )}
        </S.Search>
      )}
    </S.Container>
  )
}
