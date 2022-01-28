import * as S from './styles'

import { CardProps } from './types'

export default function Card({
  date,
  iconName,
  maxTemperature,
  minTemperature
}: CardProps) {
  return (
    <>
      <S.Container>
        <S.Date>{date}</S.Date>
        <S.WeatherImage>
          <S.Weather
            src={`/${iconName}.png`}
            alt={`Weather ${iconName} Image`}
          />
        </S.WeatherImage>
        <S.Temperature>
          <p>{maxTemperature}ºC</p>
          <p>{minTemperature}ºC</p>
        </S.Temperature>
      </S.Container>
    </>
  )
}
