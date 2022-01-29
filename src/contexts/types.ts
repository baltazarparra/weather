type WeatherType = {
  id: number
  weather_state_name: string
  wind_direction_compass: string
  applicable_date: string
  min_temp: number
  max_temp: number
  the_temp: number
  wind_speed: number
  air_pressure: number
  humidity: number
  visibility: number
}

export type WeatherDataType = {
  title: string
  woeid: number
  time: string
  consolidated_weather: WeatherType[]
}

export type WeatherContextType = {
  weather: WeatherDataType
  addWeather: (weather: WeatherDataType) => void
}
