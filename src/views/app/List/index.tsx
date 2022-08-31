import React from 'react'

import './index.less'

function List() {
  return (
    <div className="list">
      <div className="main">
        {[1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4].map(() => {
          return (
            <div className="list__card">
              <img alt="" className="list__card__img" src="#" />
              <p className="list__card__divider"></p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
