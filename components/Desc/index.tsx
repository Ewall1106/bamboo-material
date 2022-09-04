import React from 'react'
import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { nanoid } from 'nanoid'
import LottieFile from '@/components/LottieFile'

import styles from './index.module.scss'

const Desc = () => {
  const { t } = useTranslation('home')
  const docId = Math.random()

  return (
    <div className={styles.desc}>
      <h1 className={styles.desc__title}>
        <span style={{ color: '#15aabf', fontWeight: 'bold', marginRight: 4 }}>123</span>
        {t('components built with Bamboo')}
      </h1>
      <div className={styles.desc__text}>{t('description')}</div>
      <div className={styles.desc__text} style={{ display: 'flex', alignItems: 'flex-end' }}>
        <span>{t('have-fun')}</span>
        <LottieFile path="https://assets7.lottiefiles.com/packages/lf20_K0tMD4BNJS.json" />
      </div>
    </div>
  )
}

export default Desc
