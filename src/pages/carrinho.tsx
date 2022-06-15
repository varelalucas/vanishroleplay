import type { NextPage } from 'next'
import Head from 'next/head'

import { Navbar } from '../components/globals/Navbar'
import { CartContent } from '../components/pages/Cart'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Carrinho | VanishRoleplay</title>
      </Head>
      <>
        <header>
          <Navbar />
        </header>
        <main>
          <CartContent />
        </main>
      </>
    </>
  )
}

export default Home
