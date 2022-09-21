import React from 'react'
import NavBar from './components/NavBar'
// import { Route, Routes } from 'react-router'
// import Home from './pages/Home'
// import Login from './pages/Login'
// import SignUp from './pages/SignUp'
import MainRoutesContainer from './routes container/MainRoutesContainer'

function App() {
  return (
    <>
      <h1> Hello from Zero-to-Zero-frontend</h1>
      <NavBar />
      <MainRoutesContainer />
    </>
  )
}

export default App
