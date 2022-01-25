import Head from 'next/head'

type Props = {
  title: string
}

export default function Home({ title = 'Weather' }: Props) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content="Weather App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{title}</h1>
      </main>

    </div>
  )
}
