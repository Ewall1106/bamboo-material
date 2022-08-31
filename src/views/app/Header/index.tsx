import React from 'react'
import { Button, Space } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import './index.less'

function Header() {
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
            Document
          </Button>
          <Button shape="round" style={{ color: '#000' }} icon={<GithubOutlined />}></Button>
        </Space>
      </div>
    </div>
  )
}

export default Header
