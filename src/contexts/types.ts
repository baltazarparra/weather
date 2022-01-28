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

type SourceType = {
  title: string
  slug: string
  url: string
  crawl_rate: number
}

type ParentType = {
  title: string
  location_type: string
  woeid: number
  latt_long: string
}

export type WeatherDataType = {
  title: string
  location_type: string
  woeid: number
  latt_long: string
  timezone: string
  time: string
  sun_rise: string
  sun_set: string
  timezone_name: string
  consolidated_weather: WeatherType[]
  sources: SourceType[]
  parent: ParentType
}

export type WeatherContextType = {
  weather: WeatherDataType
  addWeather: (weather: WeatherDataType) => void
}
