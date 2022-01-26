import * as S from './styles'

export default function Card() {
  return (
    <>
      <S.Container>
        <S.Date>Sun, 7 Jun</S.Date>
        <S.WeatherImage>
          <S.Weather src="/Hail.png" alt="Weather Image" />
        </S.WeatherImage>
        <S.Temperature>
          <p>16ºC</p>
          <p>8ºC</p>
        </S.Temperature>
      </S.Container>
    </>
  )
}
