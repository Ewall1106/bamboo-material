import React from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Button, Space, Switch } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import styles from './index.module.scss'

const Header = observer(() => {
  const router = useRouter()
  const { t } = useTranslation()

  const handleLng = () => {
    const changeTo = router.locale === 'en' ? 'zh' : 'en'
    router.push(router.route, {}, { locale: changeTo })
  }

  const handleDocument = () => {
    const link =
      router.locale === 'en'
        ? 'https://bamboo-docs.vercel.app'
        : 'https://bamboo-docs.vercel.app/zh/'
    window.open(link, '_blank')
  }

  const handleGit = () => {
    window.open('https://github.com/Ewall1106/bamboo-ui', '_blank')
  }

  return (
    <div className={styles.header}>
      <div className={styles.header__logo} onClick={() => location.reload()}>
        <Image
          width={50}
          height={50}
          alt="logo"
          src="https://s3.bmp.ovh/imgs/2022/08/31/c110cb95c5338ba1.png"
        />
        <h3 className={styles.title}>Bamboo-UI</h3>
      </div>
      <div className={styles.header__info}>
        <Space>
          <Button style={{ color: '#606f7b' }} shape="round" type="text" onClick={handleDocument}>
            {t('document')}
          </Button>
          <Switch
            checkedChildren="中文"
            unCheckedChildren="En"
            defaultChecked={router.locale === 'en'}
            onChange={handleLng}
          />
          <Button
            shape="round"
            style={{ color: '#000' }}
            icon={<GithubOutlined />}
            onClick={handleGit}
          ></Button>
        </Space>
      </div>
    </div>
  )
})

export default Header
