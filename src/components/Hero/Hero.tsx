import { useState, useContext } from 'react'
import { WeatherContext } from 'contexts/WeatherContext'
import { parseDate } from 'helpers/DateHelper'

import * as S from './styles'

export default function Hero() {
  const newdata = {
    consolidated_weather: [
      {
        id: 5471389315235840,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'NE',
        created: '2022-01-28T12:59:16.682815Z',
        applicable_date: '2022-01-28',
        min_temp: 9.0,
        max_temp: 15.844999999999999,
        the_temp: 14.5,
        wind_speed: 6.914822377080516,
        wind_direction: 53.801284116545105,
        air_pressure: 1026.0,
        humidity: 53,
        visibility: 16.926461962141097,
        predictability: 71
      },
      {
        id: 6555908353032192,
        weather_state_name: 'Light Cloud',
        weather_state_abbr: 'lc',
        wind_direction_compass: 'NNW',
        created: '2022-01-28T12:59:19.675851Z',
        applicable_date: '2022-01-29',
        min_temp: 9.305,
        max_temp: 15.934999999999999,
        the_temp: 15.025,
        wind_speed: 3.872967957610223,
        wind_direction: 330.5,
        air_pressure: 1023.0,
        humidity: 50,
        visibility: 15.775061142925315,
        predictability: 70
      },
      {
        id: 4830859266883584,
        weather_state_name: 'Clear',
        weather_state_abbr: 'c',
        wind_direction_compass: 'NW',
        created: '2022-01-28T12:59:23.177895Z',
        applicable_date: '2022-01-30',
        min_temp: 8.96,
        max_temp: 14.02,
        the_temp: 14.004999999999999,
        wind_speed: 3.3241251078872716,
        wind_direction: 304.05794639384374,
        air_pressure: 1023.5,
        humidity: 65,
        visibility: 13.724225522945995,
        predictability: 68
      },
      {
        id: 4937779659145216,
        weather_state_name: 'Heavy Cloud',
        weather_state_abbr: 'hc',
        wind_direction_compass: 'NW',
        created: '2022-01-28T12:59:26.184327Z',
        applicable_date: '2022-01-31',
        min_temp: 9.844999999999999,
        max_temp: 14.42,
        the_temp: 14.09,
        wind_speed: 3.7166257522495294,
        wind_direction: 312.2002139970705,
        air_pressure: 1020.0,
        humidity: 67,
        visibility: 12.963667183647498,
        predictability: 71
      },
      {
        id: 6215067667267584,
        weather_state_name: 'Clear',
        weather_state_abbr: 'c',
        wind_direction_compass: 'NW',
        created: '2022-01-28T12:59:28.740750Z',
        applicable_date: '2022-02-01',
        min_temp: 9.629999999999999,
        max_temp: 15.025,
        the_temp: 14.940000000000001,
        wind_speed: 4.429610069039477,
        wind_direction: 326.2195680337904,
        air_pressure: 1016.0,
        humidity: 57,
        visibility: 12.60202914976537,
        predictability: 68
      },
      {
        id: 4528421259444224,
        weather_state_name: 'Clear',
        weather_state_abbr: 'c',
        wind_direction_compass: 'NNE',
        created: '2022-01-28T12:59:31.773837Z',
        applicable_date: '2022-02-02',
        min_temp: 9.995000000000001,
        max_temp: 15.434999999999999,
        the_temp: 13.81,
        wind_speed: 5.099444046766882,
        wind_direction: 17.5,
        air_pressure: 1018.0,
        humidity: 33,
        visibility: 9.999726596675416,
        predictability: 68
      }
    ],
    time: '2022-01-28T05:09:29.592357-08:00',
    sun_rise: '2022-01-28T07:16:43.321302-08:00',
    sun_set: '2022-01-28T17:27:54.750843-08:00',
    timezone_name: 'LMT',
    parent: {
      title: 'California',
      location_type: 'Region / State / Province',
      woeid: 2347563,
      latt_long: '37.271881,-119.270233'
    },
    sources: [
      {
        title: 'BBC',
        slug: 'bbc',
        url: 'http://www.bbc.co.uk/weather/',
        crawl_rate: 360
      },
      {
        title: 'Forecast.io',
        slug: 'forecast-io',
        url: 'http://forecast.io/',
        crawl_rate: 480
      },
      {
        title: 'HAMweather',
        slug: 'hamweather',
        url: 'http://www.hamweather.com/',
        crawl_rate: 360
      },
      {
        title: 'Met Office',
        slug: 'met-office',
        url: 'http://www.metoffice.gov.uk/',
        crawl_rate: 180
      },
      {
        title: 'OpenWeatherMap',
        slug: 'openweathermap',
        url: 'http://openweathermap.org/',
        crawl_rate: 360
      },
      {
        title: 'Weather Underground',
        slug: 'wunderground',
        url: 'https://www.wunderground.com/?apiref=fc30dc3cd224e19b',
        crawl_rate: 720
      },
      {
        title: 'World Weather Online',
        slug: 'world-weather-online',
        url: 'http://www.worldweatheronline.com/',
        crawl_rate: 360
      }
    ],
    title: 'San Francisco',
    location_type: 'City',
    woeid: 2487956,
    latt_long: '37.777119, -122.41964',
    timezone: 'US/Pacific'
  }
  const [isOpen, setIsOpen] = useState(false)
  const { weather, addWeather } = useContext(WeatherContext)

  const todayWeatherData = weather.consolidated_weather[0]
  const todayDate = parseDate(todayWeatherData.applicable_date)
  const temperature = parseInt(todayWeatherData.the_temp.toString())
  const iconSrc = `/${todayWeatherData.weather_state_name.replace(
    / /g,
    ''
  )}.png`
  const iconAlt = `${todayWeatherData.weather_state_name} image`

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <button onClick={() => addWeather(newdata)}>clique</button>
          <S.SearchButton onClick={() => setIsOpen(true)}>
            Search for places
          </S.SearchButton>
          <S.LocationButton>
            <img src="/Location.png" alt="Location icon" />
          </S.LocationButton>
        </S.Header>
        <S.WeatherBox>
          <S.WeatherImage>
            <img src={iconSrc} alt={iconAlt} />
          </S.WeatherImage>
          <S.WeatherData>
            <S.Temperature>
              {temperature}
              <span>ºC</span>
            </S.Temperature>
          </S.WeatherData>
          <S.TemperatureSubtitle>
            {todayWeatherData.weather_state_name}
          </S.TemperatureSubtitle>
        </S.WeatherBox>
        <S.Footer>
          <S.TodayDate>Today • {todayDate}</S.TodayDate>
          <S.Location>
            <img src="/Pin.png" alt="Map Pin image" />
            <p>London</p>
          </S.Location>
        </S.Footer>
      </S.Main>
      {isOpen && (
        <S.Search>
          <S.CloseButton onClick={() => setIsOpen(false)}>✖</S.CloseButton>
          <S.SearchBox>
            <S.SearchInput placeholder="search location" />
            <S.SearchAction>Search</S.SearchAction>
          </S.SearchBox>
        </S.Search>
      )}
    </S.Container>
  )
}
