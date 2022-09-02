import React from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import { Button, Space, Switch } from 'antd'
import { GithubOutlined } from '@ant-design/icons'
import { getLng } from '@/utils'

import './index.less'

const Header = observer(() => {
  const { t, i18n } = useTranslation()

  const handleLng = flag => {
    const lng = flag ? 'en_US' : 'zh_CN'
    localStorage.setItem('lng', lng)
    i18n.changeLanguage(lng, () => {
      console.log('===language change===', lng)
    })
  }

  return (
    <div className="header">
      <div className="header__logo">
        <img
          className="logo"
          alt="logo"
          src="https://s3.bmp.ovh/imgs/2022/08/31/c110cb95c5338ba1.png"
        />
        <h3 className="title">Bamboo-UI</h3>
      </div>
      <div className="header__info">
        <Space>
          <Button style={{ color: '#606f7b' }} shape="round" type="text">
            {t('document')}
          </Button>
          <Switch
            checkedChildren="English"
            unCheckedChildren="中文"
            defaultChecked={getLng() !== 'zh_CN'}
            onChange={handleLng}
          />
          <Button shape="round" style={{ color: '#000' }} icon={<GithubOutlined />}></Button>
        </Space>
      </div>
    </div>
  )
})

export default Header
