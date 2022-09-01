import React, { useEffect } from 'react'

import Header from './Header'
import Filter from './Filter'
import Main from './Main'
import Pagination from './Pagination'

import FilterObserver from './Filter/mbox'

function App() {
  useEffect(() => {
    FilterObserver.handleReset()
  }, [])

  return (
    <div id="App">
      <Header />
      <Filter />
      <Main />
      <Pagination />
    </div>
  )
}

export default App
