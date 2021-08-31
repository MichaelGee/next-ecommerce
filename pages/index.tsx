import { Footer } from 'components/organisms/Footer/Footer'
import Head from 'next/head'
import { FC } from 'react'


const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Grandior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer/>
    </>
  )
}

export default Home;
