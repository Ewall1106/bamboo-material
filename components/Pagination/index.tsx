import React from 'react'
import { observer } from 'mobx-react'
import ListInfoObserver from '../List/mbox'
import { Pagination as AntPagination } from 'antd'

import styles from './index.module.scss'

const Pagination = observer(() => {
  const isTransForm = ListInfoObserver.getTransForm()
  const total = ListInfoObserver.getTotal()
  const current = ListInfoObserver.getPageNo()
  const pageSize = ListInfoObserver.getPageSize()

  const onChange = pagination => {
    ListInfoObserver.requestList({ pageNo: pagination })
  }

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__main} style={{ width: isTransForm ? '100%' : '70%' }}>
        <AntPagination
          onChange={onChange}
          current={current}
          pageSize={pageSize}
          total={total}
          showSizeChanger={false}
        />
      </div>
    </div>
  )
})

export default Pagination
