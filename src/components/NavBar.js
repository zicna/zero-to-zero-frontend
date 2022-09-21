import React from 'react'

import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      NavBar
      <ul>
        <li>
          <NavLink to="/home">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/login">LOGIN</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SIGNUP</NavLink>
        </li>
      </ul>
    </div>
  )
}
