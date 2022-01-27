import { useState } from 'react'

import * as S from './styles'

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.Main>
        <S.Header>
          <S.SearchButton onClick={() => setIsOpen(true)}>
            Search for places
          </S.SearchButton>
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
      {isOpen && (
        <S.Search>
          <S.CloseButton onClick={() => setIsOpen(false)}>✖</S.CloseButton>
          <S.SearchBox>
            <S.SearchInput placeholder="search location" />
            <S.SearchAction>Search</S.SearchAction>
          </S.SearchBox>
        </S.Search>
      )}
    </S.Container>
  )
}
