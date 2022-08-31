import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'

import App from './views/app'

import './styles'

if (process.env.PROJECT_ENV === 'mock') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
)
