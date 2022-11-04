import React from 'react'
import MessageContainer from './components/MessageContainer/MessageContainer'
import NavBar from './components/NavBar/NavBar'
import MainRoutesContainer from './routesContainer/MainRoutesContainer'

function App() {
  return (
    <>
      <h1> Hello from Zero-to-Zero-frontend</h1>
      <NavBar />
      <MessageContainer />
      <MainRoutesContainer />
    </>
  )
}

export default App
