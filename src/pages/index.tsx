import type { NextPage } from 'next'
import Head from 'next/head'

import { Header } from '../components/pages/Home/Header'
import { News } from '../components/pages/Home/News'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Início | VanishRoleplay</title>
      </Head>
      <>
        <Header />
        <main>
          <News />
        </main>
      </>
    </>
  )
}

export default Home
