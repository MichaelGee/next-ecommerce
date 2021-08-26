import { PrimaryButton } from 'components/atoms/Button'
import { ProductCard } from 'components/organisms/ProductCard'
import Head from 'next/head'
import { FC } from 'react'


const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <ProductCard/>
    </>

  )
}

export default Home;
