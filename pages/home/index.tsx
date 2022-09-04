import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from './index.module.scss'
import { Button } from 'antd'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>bamboo</Button>
    </div>
  )
}

export default Home
