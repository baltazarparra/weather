import { useContext, useState, useEffect } from 'react'
import { WeatherContext } from 'contexts/WeatherContext'

import * as S from './styles'
import { HighlightProps } from './types'

export default function Highlights() {
  const { weather } = useContext(WeatherContext)
  const [highlights, setHighlights] = useState<HighlightProps>()

  useEffect(() => {
    const todayWeatherData = weather.consolidated_weather[0]
    setHighlights({
      windSpeed: parseInt(todayWeatherData.wind_speed.toString()),
      miles: Math.round(todayWeatherData.visibility * 10) / 10,
      airpressure: parseInt(todayWeatherData.air_pressure.toString()),
      windDirection: todayWeatherData.wind_direction_compass,
      humidity: todayWeatherData.humidity
    })
  }, [weather])

  return (
    <S.Container>
      <S.Title>Todays Highlights</S.Title>
      <S.Highlights>
        <S.Highlight>
          <S.HighlightTitle>Wind status</S.HighlightTitle>
          <S.HighlightData>
            {highlights?.windSpeed}
            <span>mph</span>
          </S.HighlightData>
          <S.HighlightSubTitle>{highlights?.windDirection}</S.HighlightSubTitle>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>Humidity</S.HighlightTitle>
          <S.HighlightData>
            {highlights?.humidity}
            <span>%</span>
          </S.HighlightData>
          <S.Bar>
            <S.Percents>
              <p>0</p>
              <p>50</p>
              <p>100</p>
            </S.Percents>
            <S.Humidity>
              <span style={{ width: `${highlights?.humidity}%` }}></span>
            </S.Humidity>
          </S.Bar>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>Visibility</S.HighlightTitle>
          <S.HighlightData>
            {highlights?.miles}
            <span>miles</span>
          </S.HighlightData>
        </S.Highlight>
        <S.Highlight>
          <S.HighlightTitle>Air Pressure</S.HighlightTitle>
          <S.HighlightData>
            {highlights?.airpressure}
            <span>mb</span>
          </S.HighlightData>
        </S.Highlight>
      </S.Highlights>
    </S.Container>
  )
}
