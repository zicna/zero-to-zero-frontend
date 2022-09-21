import React from 'react'
import { Routes, Route } from 'react-router'

import Home from "../pages/Home"
import Login from "../pages/Login"
import SignUp from "../pages/SignUp"

export default function MainRoutesContainer() {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
    </>
  )
}
