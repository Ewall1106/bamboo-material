import React from 'react'
import { useTranslation } from 'next-i18next'
import { observer } from 'mobx-react'
import LottieFile from '@/components/LottieFile'
import ListInfoObserver from '../List/mbox'
import CountUp from 'react-countup'

import styles from './index.module.scss'

const Desc = observer(() => {
  const { t } = useTranslation('home')
  const total = ListInfoObserver.getTotal()
  const countList = `${total}`.padStart(2, '0').split('')

  return (
    <div className={styles.desc}>
      <h1 className={styles.desc__title}>
        <span style={{ color: '#15aabf', fontWeight: 'bold', marginRight: 10 }}>
          {countList.map(num => {
            return <CountUp end={Number(num)} />
          })}
        </span>
        {t('components built with Bamboo')}
      </h1>
      <div className={styles.desc__text}>{t('description')}</div>
      <div className={styles.desc__text} style={{ display: 'flex', alignItems: 'flex-end' }}>
        <span>{t('have-fun')}</span>
        <LottieFile path="https://assets7.lottiefiles.com/packages/lf20_K0tMD4BNJS.json" />
      </div>
    </div>
  )
})

export default Desc
