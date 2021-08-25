import { Searchbar } from 'components/molecules/Searchbar'
import Head from 'next/head'
import { FC } from 'react'


const Home: FC = () => {
  return (

    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Searchbar/>
    </>

  )
}

export default Home;
