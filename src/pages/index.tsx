import Hero from 'components/Hero/'
import CardList from 'components/CardList/'

import * as S from '../styles/app'

export default function Home() {
  return (
    <S.Container>
      <Hero />
      <S.Main>
        <CardList />
      </S.Main>
    </S.Container>
  )
}
