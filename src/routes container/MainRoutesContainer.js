import React from 'react'
import { Routes, Route } from 'react-router'
import Auth from '../components/Auth/Auth.js'
import LogOut from '../components/LogOut'
import Home from '../pages/Home'
import Profile from '../pages/Profile.js'
import PageNotFound from '../pages/PageNotFound'

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
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  )
}
