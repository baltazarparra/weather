import { useContext } from 'react'
import { WeatherContext } from 'contexts/WeatherContext'

import { parseDate } from 'helpers/DateHelper'

import * as S from './styles'

import Card from '../Card'

export default function CardList() {
  const { weather } = useContext(WeatherContext)
  const weeklyWeather = weather.consolidated_weather.slice(1)

  return (
    <S.Container>
      <S.Degrees>ºC</S.Degrees>
      <S.List>
        {weeklyWeather &&
          weeklyWeather.map((day) => (
            <S.Item key={day.id}>
              <Card
                date={parseDate(day.applicable_date)}
                iconName={day.weather_state_name.replace(/ /g, '')}
                maxTemperature={parseInt(day.max_temp.toString())}
                minTemperature={parseInt(day.min_temp.toString())}
              />
            </S.Item>
          ))}
      </S.List>
    </S.Container>
  )
}
