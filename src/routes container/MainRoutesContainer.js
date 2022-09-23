import React from 'react'
import { Routes, Route } from 'react-router'

import Home from "../pages/Home"
import Login from "../pages/Login"
import Auth from "../pages/Auth.js"

export default function MainRoutesContainer() {
  return (
    <>
    <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/auth" element={<Auth />}></Route>
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
      </Routes>
    </>
  )
}
