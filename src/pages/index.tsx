import Hero from 'components/Hero/'
import CardList from 'components/CardList/'
import Highlights from 'components/Highlights/'

import * as S from '../styles/app'

export default function Home() {
  return (
    <S.Container>
      <Hero />
      <S.Main>
        <CardList />
        <Highlights />
        <S.Footer>
          created by{' '}
          <a
            href="http://baltazarparra.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            baltazarparra
          </a>
        </S.Footer>
      </S.Main>
    </S.Container>
  )
}
