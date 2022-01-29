import { createContext, useState, FC } from 'react'

import { WeatherContextType, WeatherDataType } from './types'

const mock = {
  consolidated_weather: [
    {
      id: 0,
      weather_state_name: 'Loading...',
      wind_direction_compass: 'Wind',
      applicable_date: new Date().toISOString().slice(0, 10),
      min_temp: 0,
      max_temp: 0,
      the_temp: 0,
      wind_speed: 0,
      air_pressure: 0,
      humidity: 0,
      visibility: 0
    }
  ],
  time: new Date().toISOString().slice(0, 10),
  title: 'wait inicital data...',
  woeid: 44418
}

const contextDefaultValues: WeatherContextType = {
  weather: mock,
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
