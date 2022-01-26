import styled from 'styled-components'

export const Container = styled.div`
  padding: 5.4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`

export const Item = styled.li`
  display: block;
  margin: 0 26px 32px 0px;

  &:last-child {
    margin-right: 0;
  }
`

export const Degrees = styled.span`
  background-color: white;
  margin-bottom: 6.6rem;
  border-radius: 100%;
  height: 4rem;
  width: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 1.8rem;
`
