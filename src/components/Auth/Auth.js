import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { useValidator } from '../../hooks/use-validator'

import { submitUser, SIGNUP, LOGIN } from '../../helpers/fetchHelpers'
import { passwordValidator } from '../../helpers/validatorHelper'

import styles from './auth.module.css'

export default function Auth({ setIsLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoadding] = useState(false)

  const [email, setEmail] = useState('')

  // * validation for email field
  const [emailTouched, setEmailTouched] = useState(false)
  const emailRef = useRef('')

  const emaiBlurHandler = () => {
    setEmailTouched(true)
  }

  useEffect(() => {
    if (emailTouched && !emailRef.current.value.includes('@')) {
      emailRef.current.className = styles.invalid
      console.log(emailRef)
    } else {
      emailRef.current.className = ''
    }
  }, [emailTouched, email])

  // ****************************
  // * set validation for password and passCon using custom hook
  const {
    input: password,
    setInput: setPassword,
    inputRef: passwordRef,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
  } = useValidator(passwordValidator)
  const {
    input: passwordConfirmation,
    setInput: setPasswordConfirmation,
    inputRef: passwordConfirmationRef,
    inputBlurHandler: passwordConfirmationBlurHandler,
    inputChangeHandler: passwordConfirmationChangeHandler,
  } = useValidator(passwordValidator)
  // ****************************


  const emailChangeHandler = (event) => {
    setEmail(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    setIsLoadding(true)
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
    setIsLoadding(false)

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
            ref={emailRef}
            onChange={emailChangeHandler}
            onBlur={emaiBlurHandler}
            // autoFocus
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="password"
            ref={passwordRef}
            value={password}
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
          />
        </div>
        <div>
          <label htmlFor="password-confirmation">password confirmation</label>
          <input
            id="password-confirmation"
            type="password"
            ref={passwordConfirmationRef}
            value={passwordConfirmation}
            onChange={passwordConfirmationChangeHandler}
            onBlur={passwordConfirmationBlurHandler}
          />
        </div>
        {isLoading ? (
          <p>laoding</p>
        ) : (
          <div className={styles.actions}>
            <button className={styles.submit} type="submit">
              {isLogin ? 'LOGIN' : 'SIGNUP'}{' '}
            </button>
            <button type="button" onClick={changePurposeHandler}>
              {isLogin
                ? 'create new account'
                : 'already have account, login insted'}
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
