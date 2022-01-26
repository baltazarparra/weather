import * as S from './styles'

export default function Hero() {
  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.SearchButton>Search for places</S.SearchButton>
          <S.LocationButton>
            <img src="/Location.png" alt="Location icon" />
          </S.LocationButton>
        </S.Header>
        <S.WeatherBox>
          <S.WeatherImage>
            <img src="/Shower.png" alt="Cloud image" />
          </S.WeatherImage>
          <S.WeatherData>
            <S.Temperature>
              15<span>ºC</span>
            </S.Temperature>
          </S.WeatherData>
          <S.TemperatureSubtitle>Shower</S.TemperatureSubtitle>
        </S.WeatherBox>
        <S.Footer>
          <S.TodayDate>Today • Fri, 5 Jun</S.TodayDate>
          <S.Location>
            <img src="/Pin.png" alt="Map Pin image" />
            <p>Helsinki</p>
          </S.Location>
        </S.Footer>
      </S.Main>
    </S.Container>
  )
}
