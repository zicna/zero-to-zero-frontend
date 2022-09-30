import styles from './log-out.module.css'
import { useNavigate } from 'react-router'
import { useState, useContext } from 'react'
import AuthContext from '../../store/auth-context'
import { logOutUser } from '../../helpers/logOutUser'
import { useDispatch } from 'react-redux'
import { LOGOUT, CLEAR } from '../../store/redux-action'

const LogOut = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const navigator = useNavigate()
  const logOutCtx = useContext(AuthContext)
  const token = logOutCtx.token
  const dispatch = useDispatch()

  const logOutHandler = async () => {
    setIsLoggingOut(true)
    try {
      const response = await logOutUser(token)
      // * guard clause
      if (response instanceof Error) throw new Error(response.message)
      logOutCtx.logout()
      dispatch({ type: LOGOUT })
      // ! this should be resolved with redux thunk
      setTimeout(() => {
        dispatch({ type: CLEAR })
      }, 3000)
      navigator('/home', { replace: true })
    } catch (error) {
      alert('something went wrong')
    } finally {
      setIsLoggingOut(false)
    }
  }
  return (
    <div className={styles.logOut}>
      <p>Are you sure you want to Log Out?</p>
      {!isLoggingOut ? (
        <button type="button" onClick={logOutHandler}>
          LOGOUT
        </button>
      ) : (
        <p>Logging out ...</p>
      )}
      {}
    </div>
  )
}

export default LogOut
