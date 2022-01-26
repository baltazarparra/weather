import * as S from './styles'

import Card from '../Card'

export default function CardList() {
  return (
    <S.Container>
      <S.Degrees>ºC</S.Degrees>
      <S.List>
        <S.Item>
          <Card />
        </S.Item>
        <S.Item>
          <Card />
        </S.Item>
        <S.Item>
          <Card />
        </S.Item>
        <S.Item>
          <Card />
        </S.Item>
        <S.Item>
          <Card />
        </S.Item>
      </S.List>
    </S.Container>
  )
}
