import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router'
// import Home from "../../pages/Home";
import AuthContext from '../../store/auth-context'
import { CLEAR, MUST_ACTION } from '../../store/redux-action'

const PermittedWrapepr = ({ children }) => {
  // * dip into context to see if user is logged in
  const authCtx = useContext(AuthContext)
  const isLoggedIn = authCtx.isLoggedIn

  const dispatch = useDispatch()

  const stateOne = useSelector((state) => {
    return state
  })
  // * guard clause to check if user is logged in
  // ! problem: not just to return Home component but also to redirect to "/home" URL
  // if(!isLoggedIn) return < Home/>
  // * solution: redirect to "/auth" path and display message to access "/profile" you must be "signed in" or "logged in"
  if (!isLoggedIn) {
    dispatch({ type: MUST_ACTION })
    // ! this should be resolved with redux thunk
    setTimeout(() => {
      dispatch({ type: CLEAR })
    }, 3000)
    return <Navigate to="/auth" />
  }

  return children
}

export default PermittedWrapepr
