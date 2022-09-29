import React, {useContext} from 'react'
import { NavLink } from 'react-router-dom'
import AuthContext from '../../store/auth-context'
import styles from './nav-bar.module.css'

export default function NavBar() {

  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn
  return (
    <div className={styles.container}>
      <div>LOGO</div>
      <ul className={styles.liContainer}>
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
