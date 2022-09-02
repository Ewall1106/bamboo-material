import React from 'react'
import { observer } from 'mobx-react'
import ListInfoObserver from '../List/mbox'
import { Pagination as AntPagination } from 'antd'

import './index.less'

const Pagination = observer(() => {
  const isTransForm = ListInfoObserver.getTransForm()
  const total = ListInfoObserver.getTotal()
  const current = ListInfoObserver.getPageNo()
  const pageSize = ListInfoObserver.getPageSize()

  const onChange = pagination => {
    ListInfoObserver.requestList({ pageNo: pagination })
  }

  return (
    <div className="pagination">
      <div className="pagination__main" style={{ width: isTransForm ? '100%' : '70%' }}>
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
