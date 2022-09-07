import React, { useEffect } from 'react'
import { observer } from 'mobx-react'
import ListInfoObserver from './mbox'
import { useRouter } from 'next/router'
import { DownloadOutlined } from '@ant-design/icons'
import { Skeleton, Empty } from 'antd'
import Image from 'next/image'
import FrameIcon from '@/components/FrameIcon'

import styles from './index.module.scss'

const List = observer(() => {
  const list = ListInfoObserver.getList()
  const loading = ListInfoObserver.getLoading()
  const isSkeleton = ListInfoObserver.getSkeleton()
  const isTransForm = ListInfoObserver.getTransForm()
  const setCurrentItem = ListInfoObserver.setCurrentItem

  const router = useRouter()
  const iszh = router.locale === 'zh'

  useEffect(() => {
    ListInfoObserver.setSkeleton(true)
  }, [])

  const SkeletonImage = ({ active }) => {
    return <Skeleton.Image style={{ width: 200, height: 200 }} active={active} />
  }

  const Thumb = ({ url }) => {
    if (loading) {
      return <SkeletonImage active={true} />
    } else if (url) {
      return <Image alt="thumb" width={200} height={200} src={url} />
    } else {
      return <SkeletonImage active={false} />
    }
  }

  const DownloadCount = ({ count }) => {
    return (
      <div className={styles.count}>
        <DownloadOutlined />
        <span style={{ paddingLeft: 2 }}>{count}</span>
      </div>
    )
  }

  return (
    <div className={styles.list} style={{ width: isTransForm ? '100%' : '70%' }}>
      <div className={styles.content}>
        {list.map(item => {
          return (
            <div
              className={styles.list__card}
              key={item.key}
              style={item.placeholder && { visibility: 'hidden' }}
              onClick={() => setCurrentItem(item)}
            >
              <div className={styles.list__card__thumb}>
                <Thumb url={item.thumb} />
              </div>
              <p className={styles.list__card__divider}></p>
              <div className={styles.list__card__desc}>
                <FrameIcon type={item.type} />
                <div className={styles.title}>{iszh ? item.name_zh : item.name}</div>
                <DownloadCount count={item?.download || 0} />
              </div>
            </div>
          )
        })}

        {isSkeleton && <Skeleton active />}

        {!list.length && !isSkeleton && (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} style={{ margin: '20px auto' }} />
        )}
      </div>
    </div>
  )
})

export default List
