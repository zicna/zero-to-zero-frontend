import React from 'react'
import { useState, useRef } from 'react'

import { submitUser} from '../helpers/fetchHelpers'

export const SIGNUP = 'signup'
export const LOGIN = 'login'

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const form = useRef('')

  const passConChangeHandler = (event) => {
    setPasswordConfirmation(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value)
  }

  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    const userObject = {
      user: { email, password, passwordConfirmation },
    }
    if (isLogin) {
      // debugger
      submitUser(userObject, LOGIN)
    } else {
      submitUser(userObject, SIGNUP)
    }

    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
  }

  const changePurposeHandler = () => {
    setIsLogin((prevState) => !prevState)
  }
  return (
    <div>
      <h2>{isLogin ? 'LOGIN' : 'SIGNUP'}</h2>
      <form action="" onSubmit={submitHandler} ref={form}>
        <legend>create new user</legend>
        <div>
          <label htmlFor="">email</label>
          <input type="email" value={email} onChange={emailChangeHandler} />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">password confirmation</label>
          <input
            type="password"
            value={passwordConfirmation}
            onChange={passConChangeHandler}
          />
        </div>
        <div>
          <input type="submit" value="SUBMIT" />
        </div>
        <div>
          <button onClick={changePurposeHandler}>
            {isLogin ? 'SIGN UP' : 'LOGIN'} insted
          </button>
        </div>
      </form>
    </div>
  )
}
