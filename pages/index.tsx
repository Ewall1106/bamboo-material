import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import FilterObserver from '@/components/Filter/mbox'

import Header from '@/components/Header'
import Filter from '@/components/Filter'
import Main from '@/components/Main'

import type { NextPage } from 'next'

const Index: NextPage = () => {
  useEffect(() => {
    FilterObserver.handleReset()
  }, [])

  return (
    <>
      <Header />
      <Filter />
      <Main />
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }: any) => {
  const lng = await serverSideTranslations(locale, ['common', 'home'])

  return {
    props: {
      ...lng
    }
  }
}

export default Index
