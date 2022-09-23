import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home'
import Auth from '../components/Auth/Auth.js'
import LogOut from '../components/LogOut'
import Profile from '../pages/Profile.js'

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
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  )
}
