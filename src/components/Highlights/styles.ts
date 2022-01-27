import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  color: #e7e7eb;
  flex-direction: column;
  max-width: 70rem;

  @media (max-width: 1290px) {
    max-width: inherit;
    padding: 5.4rem;
    align-items: center;
  }

  @media (max-width: 996px) {
    padding: 0;
  }
`

export const Title = styled.h1`
  font-size: 2.4rem;
  font-weight: 700;

  @media (max-width: 450px) {
    margin-top: 4rem;
  }
`

export const HighlightTitle = styled.h1`
  font-size: 1.6rem;
  font-weight: 500;
`

export const HighlightData = styled.p`
  font-size: 6.4rem;
  font-weight: 700;

  span {
    font-size: 3.6rem;
    font-weight: 500;
  }
`

export const HighlightSubTitle = styled.p`
  font-size: 1.4rem;
  font-weight: 500;
  margin-top: 3.2rem;
`

export const Highlights = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;

  @media (max-width: 1290px) {
    justify-content: center;
  }
`

export const Highlight = styled.li`
  width: 32.8rem;
  margin-top: 3.2rem;
  background-color: #1e213a;
  padding: 2.2rem 2.2rem 3.8rem 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(odd) {
    margin-right: 4.4rem;
  }

  @media (max-width: 1290px) {
    margin: 2rem 4rem;

    &:nth-child(odd) {
      margin: 2rem 4rem;
    }
  }

  @media (max-width: 450px) {
    width: 26rem;
    margin: 1rem;

    &:nth-child(odd) {
      margin: 1rem;
    }
  }
`
