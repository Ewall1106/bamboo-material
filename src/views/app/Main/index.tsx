import React from 'react'
import { Button, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import Desc from '../Desc'
import List from '../List'

import './index.less'

function Main() {
  return (
    <div className="main">
      <Desc />
      <List />
    </div>
  )
}

export default Main
