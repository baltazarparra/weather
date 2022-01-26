import styled, { keyframes } from 'styled-components'

const slide = keyframes`
  100% {
    background-position: -2000% 0;
  }
`

export const Container = styled.div`
  max-width: 460px;
  background-color: #1e213a;
  height: 100vh;
  color: #e7e7eb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 42px 0;
  overflow: hidden;
`

export const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 0 46px;
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
`

export const WeatherImage = styled.div`
  width: 234px;
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
`

export const TemperatureSubtitle = styled.p`
  font-size: 3.6rem;
  color: #a09fb1;
  font-weight: 600;
`

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
