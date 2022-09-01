import React from 'react'
import { Pagination as AntPagination } from 'antd'

import './index.less'

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="pagination__main">
        <AntPagination defaultCurrent={1} total={100} showSizeChanger={false} />
      </div>
    </div>
  )
}

export default Pagination
