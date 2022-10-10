import React from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { observer } from 'mobx-react'
import LottieFile from '@/components/LottieFile'
import ListInfoObserver from '../List/mbox'
import CountUp from 'react-countup'

import styles from './index.module.scss'

const Desc = observer(() => {
  const router = useRouter()
  const { t } = useTranslation('home')
  const total = ListInfoObserver.getTotal()

  return (
    <div className={styles.desc}>
      <h1 className={styles.desc__title}>
        <CountUp className={styles.desc__count} start={0} end={total} />
        {t('components built with Bamboo')}
      </h1>
      <div className={styles.desc__text}>{t('description')}</div>
      <div className={styles.desc__text} style={{ display: 'flex', alignItems: 'flex-end' }}>
        <span>{t('have-fun')}</span>
        <LottieFile path="https://assets7.lottiefiles.com/packages/lf20_K0tMD4BNJS.json" />
      </div>

      {router.locale === 'zh' ? (
        <iframe
          style={{ marginTop: 40 }}
          width="90%"
          height="auto"
          src="//player.bilibili.com/player.html?aid=260408330&bvid=BV1he411u7DT&cid=829929132&page=1"
          scrolling="no"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      ) : (
        <iframe
          style={{ marginTop: 40 }}
          width="90%"
          height="auto"
          src="https://www.youtube.com/embed/xMsnhtf3j1o"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  )
})

export default Desc
