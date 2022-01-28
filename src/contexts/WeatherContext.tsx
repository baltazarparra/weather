import { createContext, useState, FC } from 'react'

import { WeatherContextType, WeatherDataType } from './types'

const DEFAULT_VALUE = {
  consolidated_weather: [
    {
      id: 5313472561676288,
      weather_state_name: 'Light Cloud',
      weather_state_abbr: 'lc',
      wind_direction_compass: 'WSW',
      created: '2022-01-27T21:59:02.146198Z',
      applicable_date: '2022-01-27',
      min_temp: 4.4,
      max_temp: 11.23,
      the_temp: 10.205,
      wind_speed: 7.04348062461624,
      wind_direction: 254.45252488403332,
      air_pressure: 1027.5,
      humidity: 90,
      visibility: 6.476241251093613,
      predictability: 70
    },
    {
      id: 6752539572699136,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      wind_direction_compass: 'WSW',
      created: '2022-01-27T21:59:02.268767Z',
      applicable_date: '2022-01-28',
      min_temp: 2.54,
      max_temp: 9.184999999999999,
      the_temp: 8.395,
      wind_speed: 5.225696691929797,
      wind_direction: 240.6998823548991,
      air_pressure: 1035.5,
      humidity: 78,
      visibility: 8.354646365227074,
      predictability: 71
    },
    {
      id: 6188138222321664,
      weather_state_name: 'Showers',
      weather_state_abbr: 's',
      wind_direction_compass: 'W',
      created: '2022-01-27T21:59:01.940625Z',
      applicable_date: '2022-01-29',
      min_temp: 6.4350000000000005,
      max_temp: 13.754999999999999,
      the_temp: 12.73,
      wind_speed: 10.28416665560858,
      wind_direction: 269.0028554874213,
      air_pressure: 1026.5,
      humidity: 77,
      visibility: 11.223206474190725,
      predictability: 73
    },
    {
      id: 5905265737072640,
      weather_state_name: 'Heavy Cloud',
      weather_state_abbr: 'hc',
      wind_direction_compass: 'W',
      created: '2022-01-27T21:59:01.866239Z',
      applicable_date: '2022-01-30',
      min_temp: 2.855,
      max_temp: 7.475,
      the_temp: 6.855,
      wind_speed: 4.008213672859832,
      wind_direction: 269.0657910592068,
      air_pressure: 1034.0,
      humidity: 66,
      visibility: 11.548804978923089,
      predictability: 71
    },
    {
      id: 5438013023715328,
      weather_state_name: 'Light Rain',
      weather_state_abbr: 'lr',
      wind_direction_compass: 'NW',
      created: '2022-01-27T21:59:01.841488Z',
      applicable_date: '2022-01-31',
      min_temp: 4.825,
      max_temp: 7.949999999999999,
      the_temp: 7.895,
      wind_speed: 11.332637045966223,
      wind_direction: 307.34412982709165,
      air_pressure: 1024.5,
      humidity: 65,
      visibility: 12.320858685277976,
      predictability: 75
    },
    {
      id: 5110867621314560,
      weather_state_name: 'Heavy Rain',
      weather_state_abbr: 'hr',
      wind_direction_compass: 'WNW',
      created: '2022-01-27T21:59:04.543912Z',
      applicable_date: '2022-02-01',
      min_temp: 5.705,
      max_temp: 13.0,
      the_temp: 12.31,
      wind_speed: 8.323295156287283,
      wind_direction: 282.0,
      air_pressure: 1021.0,
      humidity: 79,
      visibility: 9.999726596675416,
      predictability: 77
    }
  ],
  time: '2022-01-27T23:18:52.855916Z',
  sun_rise: '2022-01-27T07:46:08.852252Z',
  sun_set: '2022-01-27T16:40:56.211074Z',
  timezone_name: 'LMT',
  parent: {
    title: 'England',
    location_type: 'Region / State / Province',
    woeid: 24554868,
    latt_long: '52.883560,-1.974060'
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
  title: 'London',
  location_type: 'City',
  woeid: 44418,
  latt_long: '51.506321,-0.12714',
  timezone: 'Europe/London'
}

const contextDefaultValues: WeatherContextType = {
  weather: DEFAULT_VALUE,
  addWeather: () => {}
}

const WeatherContext = createContext<WeatherContextType>(contextDefaultValues)

const WeatherProvider: FC = ({ children }) => {
  const [weather, setWeather] = useState<WeatherDataType>(
    contextDefaultValues.weather
  )

  const addWeather = (weather: WeatherDataType) => setWeather(weather)

  return (
    <WeatherContext.Provider
      value={{
        weather,
        addWeather
      }}
    >
      {children}
    </WeatherContext.Provider>
  )
}

export { WeatherContext, WeatherProvider }
