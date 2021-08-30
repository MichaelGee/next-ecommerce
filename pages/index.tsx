import Head from 'next/head'
import { FC } from 'react'


const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Grandior</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello world!</h1>
    </>
  )
}

export default Home;
