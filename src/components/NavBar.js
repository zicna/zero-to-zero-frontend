import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../store/auth-context'

export default function NavBar() {

  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
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
