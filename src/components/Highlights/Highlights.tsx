import { useContext } from 'react'
import { WeatherContext } from 'contexts/WeatherContext'

import * as S from './styles'

export default function Highlights() {
  const { weather } = useContext(WeatherContext)

  const todayWeatherData = weather.consolidated_weather[0]
  const windSpeed = parseInt(todayWeatherData.wind_speed.toString())
  const miles = Math.round(todayWeatherData.visibility * 10) / 10
  const airpressure = parseInt(todayWeatherData.air_pressure.toString())

  return (
    <S.Container>
      <S.Title>Todays Highlights</S.Title>
      <S.Highlights>
        <S.Highlight>
          <S.HighlightTitle>Wind status</S.HighlightTitle>
          <S.HighlightData>
            {windSpeed}
            <span>mph</span>
          </S.HighlightData>
          <S.HighlightSubTitle>
            {todayWeatherData.wind_direction_compass}
          </S.HighlightSubTitle>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>Humidity</S.HighlightTitle>
          <S.HighlightData>
            {todayWeatherData.humidity}
            <span>%</span>
          </S.HighlightData>
          <S.Bar>
            <S.Percents>
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </S.Percents>
            <S.Humidity>
              <span style={{ width: `${todayWeatherData.humidity}%` }}></span>
            </S.Humidity>
          </S.Bar>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>Visibility</S.HighlightTitle>
          <S.HighlightData>
            {miles}
            <span>miles</span>
          </S.HighlightData>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>Air Pressure</S.HighlightTitle>
          <S.HighlightData>
            {airpressure}
            <span>mb</span>
          </S.HighlightData>
        </S.Highlight>
      </S.Highlights>
    </S.Container>
  )
}
