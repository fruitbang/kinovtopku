import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Routing from './routes/Routes'

const App = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  )
}

export default App
