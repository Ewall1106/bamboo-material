import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'
import lottie from 'lottie-web'
import { getLng } from '@/utils'
import starJson from '@/assets/star.json'
import ListInfoObserver from '../List/mbox'
import { Drawer as AntDrawer, Divider, Input, Button, Tooltip, Popover, Badge } from 'antd'
import Icon, { CopyOutlined, DownloadOutlined } from '@ant-design/icons'

import GiveStarIcon from '@/components/GiveStar'

import './index.less'

const ReactSvg = () => (
  <svg viewBox="0 0 1024 1024" width="26" height="26">
    <path
      d="M512 431.36c43.946667 0 79.786667 35.84 79.786667 80.64 0 42.666667-35.84 78.933333-79.786667 78.933333S432.213333 554.666667 432.213333 512c0-44.8 35.84-80.64 79.786667-80.64M314.453333 853.333333c26.88 16.213333 85.76-8.533333 153.6-72.533333-22.186667-25.173333-43.946667-52.48-64.426666-81.066667a968.533333 968.533333 0 0 1-102.4-15.36c-21.76 91.306667-13.653333 154.026667 13.226666 168.96m30.293334-244.906666l-12.373334-21.76c-4.693333 12.373333-9.386667 24.746667-12.373333 36.693333 11.52 2.56 24.32 4.693333 37.546667 6.826667l-12.8-21.76m279.04-32.426667l34.56-64-34.56-64c-12.8-22.613333-26.453333-42.666667-38.826667-62.72C561.92 384 537.6 384 512 384s-49.92 0-72.96 1.28c-12.373333 20.053333-26.026667 40.106667-38.826667 62.72L365.653333 512l34.56 64c12.8 22.613333 26.453333 42.666667 38.826667 62.72 23.04 1.28 47.36 1.28 72.96 1.28s49.92 0 72.96-1.28c12.373333-20.053333 26.026667-40.106667 38.826667-62.72M512 289.28c-8.106667 9.386667-16.64 19.2-25.173333 30.72h50.346666c-8.533333-11.52-17.066667-21.333333-25.173333-30.72m0 445.44c8.106667-9.386667 16.64-19.2 25.173333-30.72h-50.346666c8.533333 11.52 17.066667 21.333333 25.173333 30.72M709.12 170.666667c-26.453333-16.213333-85.333333 8.533333-153.173333 72.533333 22.186667 25.173333 43.946667 52.48 64.426666 81.066667 34.986667 3.413333 69.546667 8.533333 102.4 15.36 21.76-91.306667 13.653333-154.026667-13.653333-168.96m-29.866667 244.906666l12.373334 21.76c4.693333-12.373333 9.386667-24.746667 12.373333-36.693333-11.52-2.56-24.32-4.693333-37.546667-6.826667l12.8 21.76m61.866667-300.8c62.72 35.84 69.546667 130.133333 43.093333 240.213334 108.373333 32 186.453333 84.906667 186.453334 157.013333s-78.08 125.013333-186.453334 157.013333c26.453333 110.08 19.626667 204.373333-43.093333 240.213334-62.293333 35.84-147.2-5.12-229.12-83.2-81.92 78.08-166.826667 119.04-229.546667 83.2-62.293333-35.84-69.12-130.133333-42.666666-240.213334-108.373333-32-186.453333-84.906667-186.453334-157.013333s78.08-125.013333 186.453334-157.013333c-26.453333-110.08-19.626667-204.373333 42.666666-240.213334 62.72-35.84 147.626667 5.12 229.546667 83.2 81.92-78.08 166.826667-119.04 229.12-83.2M728.746667 512c14.506667 32 27.306667 64 37.973333 96.426667 89.6-26.88 139.946667-65.28 139.946667-96.426667s-50.346667-69.546667-139.946667-96.426667c-10.666667 32.426667-23.466667 64.426667-37.973333 96.426667M295.253333 512c-14.506667-32-27.306667-64-37.973333-96.426667-89.6 26.88-139.946667 65.28-139.946667 96.426667s50.346667 69.546667 139.946667 96.426667c10.666667-32.426667 23.466667-64.426667 37.973333-96.426667m384 96.426667l-12.8 21.76c13.226667-2.133333 26.026667-4.266667 37.546667-6.826667-2.986667-11.946667-7.68-24.32-12.373333-36.693333l-12.373334 21.76m-123.306666 172.373333c67.84 64 126.72 88.746667 153.173333 72.533333 27.306667-14.933333 35.413333-77.653333 13.653333-168.96-32.853333 6.826667-67.413333 11.946667-102.4 15.36-20.48 28.586667-42.24 55.893333-64.426666 81.066667M344.746667 415.573333l12.8-21.76c-13.226667 2.133333-26.026667 4.266667-37.546667 6.826667 2.986667 11.946667 7.68 24.32 12.373333 36.693333l12.373334-21.76m123.306666-172.373333C400.213333 179.2 341.333333 154.453333 314.453333 170.666667c-26.88 14.933333-34.986667 77.653333-13.226666 168.96a968.533333 968.533333 0 0 1 102.4-15.36c20.48-28.586667 42.24-55.893333 64.426666-81.066667z"
      fill="#00BCD4"
      p-id="12338"
    ></path>
  </svg>
)

const VueSvg = () => (
  <svg viewBox="0 0 128 128" width="26" height="26">
    <path
      fill="#42b883"
      d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"
      data-v-97393f76=""
    ></path>
    <path
      fill="#35495e"
      d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"
      data-v-97393f76=""
    ></path>
  </svg>
)

const BambooIcon = ({ type }) => {
  const svgMap = {
    vue: <VueSvg />,
    'vue-next': <VueSvg />,
    react: <ReactSvg />
  }

  return (
    <Popover content={type}>
      <Badge dot={type === 'vue-next'}>
        <Icon component={() => svgMap[type]} style={{ padding: '0 4px' }} />
      </Badge>
    </Popover>
  )
}

const GiveStar = () => {
  const handleStart = () => {
    window.open('https://github.com/Ewall1106/bamboo-ui')
  }

  return (
    <div className="giveMeStare" onClick={handleStart}>
      <GiveStarIcon />
      给此项目点个star帮助其做的更好~
    </div>
  )
}

const Drawer = observer(() => {
  const { t, i18n } = useTranslation()

  const visible = ListInfoObserver.getDrawerShow()
  const setDrawerShow = ListInfoObserver.setDrawerShow
  const info: any = ListInfoObserver.getCurrentItem()

  const DownloadCount = () => {
    return (
      <div className="drawer__download">
        <span>使用次数: </span>
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
          组件类型: <BambooIcon type={info.type} />
        </div>
        <div className="drawer__create">创建时间: {info.createdAt}</div>
        <div className="drawer__update">更新时间: {info.updatedAt}</div>

        <DownloadCount />

        <div className="drawer__command">
          <Input style={{ width: 300 }} defaultValue="$ bamboo create 123123jkjjhkjhk1231" />
          <Tooltip title="using this component">
            <Button icon={<CopyOutlined />} />
          </Tooltip>
        </div>
      </div>
    </AntDrawer>
  )
})

export default Drawer
