import React from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import ListInfoObserver from '../List/mbox'

import { Drawer as AntDrawer, Divider, Input, Button, Tooltip } from 'antd'
import { CopyOutlined, DownloadOutlined } from '@ant-design/icons'

import LottieFile from '@/components/LottieFile'
import FrameIcon from '@/components/FrameIcon'

import './index.less'

const GiveStar = () => {
  const { t } = useTranslation()

  const handleStart = () => {
    window.open('https://github.com/Ewall1106/bamboo-ui')
  }

  return (
    <div className="giveMeStare" onClick={handleStart}>
      <LottieFile path="https://assets4.lottiefiles.com/packages/lf20_083h7wcs.json" />
      {t('give-me-star')}
    </div>
  )
}

const Drawer = observer(() => {
  const { t } = useTranslation()

  const visible = ListInfoObserver.getDrawerShow()
  const setDrawerShow = ListInfoObserver.setDrawerShow
  const info: any = ListInfoObserver.getCurrentItem()

  const DownloadCount = () => {
    return (
      <div className="drawer__download">
        <span>{t('download')}: </span>
        <DownloadOutlined />
        <span style={{ paddingLeft: 2 }}>99+</span>
      </div>
    )
  }

  return (
    <AntDrawer
      className="drawer"
      width={480}
      placement="right"
      onClose={() => setDrawerShow(false)}
      closable={false}
      visible={visible}
      footer={<GiveStar />}
    >
      <div className="drawer__content">
        <img className="drawer__thumb" src={info.thumb} />
        <Divider />
        <div className="drawer__title">{info.name}</div>
        <div className="drawer__desc">{info.desc}</div>
        <div className="drawer__framework">
          {t('framework')}: <FrameIcon type={info.type} />
        </div>
        <div className="drawer__create">
          {t('create')}: {info.createdAt}
        </div>
        <div className="drawer__update">
          {t('update')}: {info.updatedAt}
        </div>

        <DownloadCount />

        <div className="drawer__command">
          <Input style={{ width: 300 }} defaultValue="$ bamboo create 123123jkjjhkjhk1231" />
          <Tooltip title={t('use this component')}>
            <Button icon={<CopyOutlined />} />
          </Tooltip>
        </div>
      </div>
    </AntDrawer>
  )
})

export default Drawer
