import React from 'react'
import { Button, Space, Card, Image, Divider } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

import './index.less'

const { Meta } = Card

function List() {
  return (
    <div className="list">
      <div className="main">
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(item => {
          return (
            <div className="list__card">
              <img className="list__card__img" src="#" />
              <p className="list__card__divider"></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
