import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  100% {
    background-position: -2000% 0;
  }
`

export const Container = styled.div`
  position: relative;
  max-width: 46rem;
  background-color: #1e213a;
  height: 100vh;
  color: #e7e7eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 888px) {
    max-width: 100%;
  }
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 4.2rem 0;
  overflow: hidden;

  @media (max-width: 450px) {
    padding: 2rem 0;
  }
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 4.6rem;

  @media (max-width: 450px) {
    padding: 0 1rem;
    margin-bottom: 4rem;
  }
`

export const SearchButton = styled.button`
  padding: 10px 18px;
  border: none;
  color: #e7e7eb;
  font-size: 1.6rem;
  max-width: 170px;
  background-color: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 4px 12px 8px rgba(0, 0, 0, 0.5);
    transform: translateY(-0.2rem);
  }
`

export const LocationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  width: 40px;
  height: 40px;
  border: none;
  background-color: #6e707a;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`

export const WeatherBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 460px;
  height: 660px;
  background-image: url('/Cloud-background.png');
  background-size: 120%;
  background-repeat: repeat-x;
  animation: ${slide} 200s linear infinite forwards;

  @media (max-width: 888px) {
    width: 100vw;
  }

  @media (max-width: 450px) {
    justify-content: space-around;
  }
`

export const WeatherImage = styled.div`
  display: flex;
  justify-content: center;
  width: 23.4rem;

  @media (max-width: 450px) {
    img {
      width: 14rem;
    }
  }
`
export const WeatherData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Temperature = styled.p`
  font-size: 14.4rem;
  font-weight: 500;

  span {
    font-size: 4.8rem;
    color: #a09fb1;
    font-weight: 400;
  }

  @media (max-width: 450px) {
    font-size: 10rem;
  }
`

export const TemperatureSubtitle = styled.p`
  font-size: 3.6rem;
  color: #a09fb1;
  font-weight: 600;

  @media (max-width: 450px) {
    margin-bottom: 4rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    margin-bottom: 1.2rem;
  }
`

export const TodayDate = styled.p`
  font-size: 1.8rem;
  color: #88869d;
`

export const Location = styled.div`
  display: flex;
  font-size: 1.8rem;
  font-weight: 600;
  color: #88869d;
  margin-top: 32px;

  img {
    margin-right: 1rem;
  }
`

export const Search = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: #1e213a;
  padding: 2em 4.6rem 4.6rem;
  text-align: right;

  @media (max-width: 450px) {
    padding: 2em;
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  color: #e7e7eb;
  font-size: 2.8rem;
  cursor: pointer;
  margin-bottom: 4rem;
  transform-origin: center;
  transition: 0.3s;

  &:hover {
    transform: rotate(-90deg);
  }
`

export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 890px) {
    justify-content: center;
  }
`

export const SearchInput = styled.input`
  width: 26.8rem;
  height: 4.8rem;
  background: none;
  border: solid 1px #e7e7eb;
  padding: 1.4rem;
  color: #e7e7eb;
  font-size: 1.6rem;
  border-radius: 0;

  @media (max-width: 890px) {
    width: 20rem;
    margin-right: 2rem;
  }

  ::placeholder {
    color: #616475;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 1.6rem;
  }
`

export const SearchAction = styled.button`
  width: 8.6rem;
  border-radius: 0;
  border: none;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 1.6rem;
  background-color: #3c47e9;
  color: #e7e7eb;
  cursor: pointer;
  border: solid 1px transparent;
  transition: 0.3s;

  &:hover {
    border-color: #e7e7eb;
  }

  &:disabled {
    border-color: transparent;
    background-color: #100e1d;
    color: #616475;
  }
`
