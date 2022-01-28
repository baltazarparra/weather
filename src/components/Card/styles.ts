import styled from 'styled-components'

export const Container = styled.div`
  height: 178px;
  width: 120px;
  background-color: #1e213a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #e7e7eb;
  padding: 1.8rem 1rem;
  font-weight: 500;
`

export const Date = styled.p`
  font-size: 1.6rem;
  margin-bottom: 1.6rem;
`

export const WeatherImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3rem;
`

export const Weather = styled.img`
  height: 60px;
`

export const Temperature = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1.6rem;
  width: 100%;

  p + p {
    color: #a09fb1;
  }
`
