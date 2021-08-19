import { PrimaryButton } from 'components/atoms/Button'
import Head from 'next/head'
import styles from 'styles/Home.module.css'
import { FC } from 'react'
import { Icon } from 'react-atomize'
import {Navbar} from 'components/organisms/Navbar';



const Home: FC = () => {
  return (
    // <div className={styles.container}>
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        </>
    //</div>
  )
}

export default Home;
