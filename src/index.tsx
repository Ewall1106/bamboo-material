import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { getLng } from '@/utils'
import App from './views/app'

import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/es/locale/en_US'

import './i18n'
import './styles'

if (process.env.PROJECT_ENV === 'mock') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

const lng = getLng() === 'zh_CN' ? zhCN : enUS

ReactDOM.render(
  <ConfigProvider locale={lng}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
)
