import { Banner } from 'components/organisms/Banner/Banner';
import { Navbar } from 'components/organisms/Navbar/Navbar';
import Head from 'next/head'
import { FC } from 'react'


const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Grandior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <Banner/>
    </>
  )
}

export default Home;
