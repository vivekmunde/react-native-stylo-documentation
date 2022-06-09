import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Head>
        <title>React Native Stylo</title>
        <meta name="description" content="Completely detached and highly scalable React Native styles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="font-extralight text-center">
          React Native Stylo
        </h1>
      </main>

      <footer />
    </div>
  )
}

export default Home
