import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from '../components/layout'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>React Native Stylo</title>
        <meta name="description" content="Completely detached and highly scalable React Native styles" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </Layout>
  )
}

export default Home
