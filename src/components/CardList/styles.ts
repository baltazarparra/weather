import styled from 'styled-components'

export const Container = styled.div`
  padding: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media (max-width: 996px) {
    padding: 2rem;
  }
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;

  @media (max-width: 1290px) {
    justify-content: center;
  }

  @media (max-width: 450px) {
    justify-content: center;
    align-items: center;
  }
`

export const Item = styled.li`
  display: block;
  margin: 0 26px 32px 0px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 450px) {
    margin: 1rem;
  }
`

export const Degrees = styled.span`
  background-color: #e7e7eb;
  margin-bottom: 6.6rem;
  border-radius: 100%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.8rem;

  @media (max-width: 450px) {
    margin-bottom: 2rem;
  }
`
