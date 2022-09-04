import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Header from '@/components/Header'
import Filter from '@/components/Filter'

import type { NextPage } from 'next'

const Index: NextPage = () => {
  const router = useRouter()
  const { t } = useTranslation('home')

  const changeTo = router.locale === 'en' ? 'zh' : 'en'

  return (
    <>
      <Header />
      <Filter />
      <p>{t('document')}</p>
      <Link href="/" locale={changeTo}>
        <button>{t('change-locale', { changeTo })}</button>
      </Link>
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
