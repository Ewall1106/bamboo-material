import React, { useEffect } from 'react'

import Header from './Header'
import Filter from './Filter'
import Main from './Main'

function App() {
  useEffect(() => {}, [])

  return (
    <div id="App">
      <Header />
      <Filter />
      <Main />
    </div>
  )
}

export default App
