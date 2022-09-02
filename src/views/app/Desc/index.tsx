import React from 'react'
import { useTranslation } from 'react-i18next'
import LottieFile from '@/components/LottieFile'

import './index.less'

function Desc() {
  const { t } = useTranslation()

  return (
    <div className="desc">
      <h1 className="desc__title">
        <span style={{ color: '#15aabf', fontWeight: 'bold', marginRight: 4 }}>123</span>
        {t('components built with Bamboo')}
      </h1>
      <div className="desc__text">{t('description')}</div>
      <div className="desc__text" style={{ display: 'flex', alignItems: 'flex-end' }}>
        <span>Hoping y'll having fun with it.</span>
        <LottieFile path="https://assets7.lottiefiles.com/packages/lf20_K0tMD4BNJS.json" />
      </div>
    </div>
  )
}

export default Desc
