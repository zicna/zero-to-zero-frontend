import React from 'react'
import { Routes, Route } from 'react-router'

import Home from '../pages/Home'
// import Login from '../pages/Login'
import Auth from '../pages/Auth.js'
import LogOut from '../pages/LogOut'

export default function MainRoutesContainer({ setIsLoggedIn }) {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route
          path="/auth"
          element={<Auth setIsLoggedIn={setIsLoggedIn} />}
        ></Route>
        <Route
          path="/logout"
          element={<LogOut setIsLoggedIn={setIsLoggedIn} />}
        />
        {/* <Route path="/signup" element={<SignUp />}></Route> */}
      </Routes>
    </>
  )
}
