import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar({ isLoggedIn }) {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/home">HOME</NavLink>
        </li>
        {!isLoggedIn && (
          <li>
            <NavLink to="/auth">LOGIN</NavLink>
          </li>
        )}
        {isLoggedIn && (
          <li>
            <NavLink to="/logout">LOGOUT</NavLink>
          </li>
        )}
      </ul>
    </div>
  )
}
