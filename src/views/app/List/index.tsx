import React from 'react'
import { Skeleton } from 'antd'
import { observer } from 'mobx-react'
import ListInfoObserver from './mbox'

import './index.less'

const List = observer(() => {
  const list = ListInfoObserver.getList()
  const loading = ListInfoObserver.getLoading()

  const SkeletonImage = ({ active }) => {
    return <Skeleton.Image style={{ width: 200, height: 200 }} active={active} />
  }

  const Thumb = ({ url }) => {
    if (loading) {
      return <SkeletonImage active={false} />
    } else if (url) {
      return <img alt="thumb" src={url} />
    } else {
      return <SkeletonImage active={false} />
    }
  }

  return (
    <div className="list">
      <div className="main">
        {list.map(item => {
          return (
            <div className="list__card">
              <div className="list__card__thumb">
                <Thumb url={item.thumb} />
              </div>
              <p className="list__card__divider"></p>
              <div className="list__card__desc">
                <p className="title">{item.name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
})

export default List
