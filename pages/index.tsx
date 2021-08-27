import { Toast } from 'components/molecules/Toast'
import Head from 'next/head'
import { FC } from 'react'


const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toast/>
    </>

  )
}

export default Home;
