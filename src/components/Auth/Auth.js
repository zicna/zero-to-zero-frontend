import React from 'react'
import { useState } from 'react'
import { submitUser, SIGNUP, LOGIN } from '../../helpers/fetchHelpers'
import styles from './auth.module.css'

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
    <div className={styles.auth}>
      <h2>{isLogin ? 'LOGIN' : 'SIGNUP'}</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={emailChangeHandler}
            autoFocus
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password-confirmation">password confirmation</label>
          <input
            id="password-confirmation"
            type="password"
            value={passwordConfirmation}
            onChange={passConChangeHandler}
          />
        </div>
        <div className={styles.actions}>
          <button className={styles.submit} type="submit">
            {isLogin ? 'LOGIN' : 'SIGNUP'}{' '}
          </button>
          {/* default type for button is submit, so both buttons were submit buttons */}
          <button type="button" onClick={changePurposeHandler}>
            {isLogin
              ? 'create new account'
              : 'already have account, login insted'}
          </button>
        </div>
      </form>
    </div>
  )
}
