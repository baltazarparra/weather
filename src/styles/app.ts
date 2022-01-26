import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  overflow-y: scroll;
`

export const Footer = styled.footer`
  color: #a09fb1;
  font-size: 1.4rem;
  margin-top: 4rem;
  padding-bottom: 2rem;

  a {
    color: #a09fb1;
  }
`
