import React from 'react'
import { useTranslation } from 'react-i18next'

import './index.less'

function Desc() {
  const { t } = useTranslation()

  return (
    <div className="desc">
      <h1 className="desc__title">
        <span style={{ color: '#15aabf', fontWeight: 'bold', marginRight: 4 }}>123</span>
        {t('components built with Bamboo')}
      </h1>
      <p className="desc__text">{t('description')}</p>
    </div>
  )
}

export default Desc
