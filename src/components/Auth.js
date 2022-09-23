import React from 'react'
import { useState } from 'react'

import { submitUser, SIGNUP, LOGIN } from '../helpers/fetchHelpers'

export default function Auth({ setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

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
      submitUser(userObject, LOGIN)
      // setIsLoggedIn(true)
    } else {
      submitUser(userObject, SIGNUP)
      // setIsLoggedIn(true)
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
      <form action="" onSubmit={submitHandler}>
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
          <button>SUBMIT </button>
        </div>
        <div>
          {/* default type for button is submit, so both buttons were submit buttons */}
          <button type="button" onClick={changePurposeHandler}>
            {isLogin ? 'SIGN UP' : 'LOGIN'} insted
          </button>
        </div>
      </form>
    </div>
  )
}
