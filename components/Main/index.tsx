import React from 'react'
import { observer } from 'mobx-react'
import Desc from '../Desc'
import List from '../List'

import ListInfoObserver from '../List/mbox'

import styles from './index.module.scss'

const Main = observer(() => {
  const isTransForm = ListInfoObserver.getTransForm()
  return (
    <div className={styles.main}>
      {!isTransForm && <Desc />}
      <List />
    </div>
  )
})

export default Main
