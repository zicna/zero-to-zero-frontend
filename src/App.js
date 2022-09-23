import React, { useState } from 'react'
import NavBar from './components/NavBar'
import MainRoutesContainer from './routes container/MainRoutesContainer'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
      <h1> Hello from Zero-to-Zero-frontend</h1>
      <NavBar isLoggedIn={isLoggedIn} />
      <MainRoutesContainer setIsLoggedIn={setIsLoggedIn} />
    </>
  )
}

export default App
