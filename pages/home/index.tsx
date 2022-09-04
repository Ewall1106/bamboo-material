import React, { useEffect } from 'react'
import Head from 'next/head'
import Image from 'next/image'
// import styles from './index.module.scss'

import type { NextPage } from 'next'

import Header from '@/components/Header'
// import Filter from './Filter'
// import Main from './Main'
// import Drawer from './Drawer'
// import Pagination from './Pagination'

// import FilterObserver from './Filter/mbox'

const Home: NextPage = () => {
  // useEffect(() => {
  //   FilterObserver.handleReset()
  // }, [])

  return (
    <div>
      <Header />
      {/* <Filter />
      <Main />
      <Drawer />
      <Pagination /> */}
    </div>
  )
}

export default Home
