import React, { useEffect } from 'react'

import Header from './Header'
import Filter from './Filter'
import Main from './Main'

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
    </div>
  )
}

export default App
