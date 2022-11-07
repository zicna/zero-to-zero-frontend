import React from 'react'
import { useState, useEffect, useRef, useContext } from 'react'
import { useNavigate } from 'react-router'
import { useValidator } from '../../hooks/use-validator'
import { useDispatch } from 'react-redux'
import { CLEAR, LOAD } from '../../store/redux-action'
import AuthContext from '../../store/auth-context'

import { submitUser, SIGNUP, LOGIN } from '../../helpers/fetchHelpers'
import {
  passwordValidator,
  emailValidator,
} from '../../helpers/validatorHelper'

import styles from './auth.module.css'

export default function Auth() {
  const [tryingToLoggin, setTryingToLoggin] = useState(true)
  const [isLoading, setIsLoadding] = useState(false)
  const authCtx = useContext(AuthContext)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // * set validation using custom hook
  const {
    input: email,
    inputValid: emailIsValid,
    setInput: setEmail,
    inputRef: emailRef,
    inputBlurHandler: emailBlurHandler,
    inputChangeHandler: emailChangeHandler,
    inputReset: emailReset,
  } = useValidator(emailValidator)
  const {
    input: password,
    inputValid: passwordIsValid,
    setInput: setPassword,
    inputRef: passwordRef,
    inputBlurHandler: passwordBlurHandler,
    inputChangeHandler: passwordChangeHandler,
    inputReset: passwordReset,
  } = useValidator(passwordValidator)
  const {
    input: passwordConfirmation,
    inputValid: passwordConfirmationIsValid,
    setInput: setPasswordConfirmation,
    inputRef: passwordConfirmationRef,
    inputBlurHandler: passwordConfirmationBlurHandler,
    inputChangeHandler: passwordConfirmationChangeHandler,
    inputReset: passwordConfirmationReset,
  } = useValidator(passwordValidator)
  // ****************************
  // ***********over all form validation*****************
  const btnActionRef = useRef('')
  const formIsValid =
    emailIsValid && passwordIsValid && passwordConfirmationIsValid
  // ****************************************************

  const submitHandler = async (event) => {
    event.preventDefault()
    setIsLoadding(true)
    let response = null
    let action = ''
    try {
      const userObject = {
        user: { email, password, password_confirmation: passwordConfirmation },
      }
      if (tryingToLoggin) {
        action = LOGIN
        response = await submitUser(userObject, action)
      } else {
        action = SIGNUP
        response = await submitUser(userObject, action)
      }
      setIsLoadding(false)
      // * guard clause in case submitUser helper returns error
      if (response instanceof Error) throw new Error(response.message)
      // * setting token in the context
      const {data} = response
      authCtx.login(data.token)
      // TODO: connect with redux to set all data coming from backend to app store
      // * we are laoding all data with one action through multiple reducer functions
      dispatch({ type: LOAD, payload: data })
      // ! this should be resolved with redux thunk
      setTimeout(() => {
        dispatch({ type: CLEAR })
      }, 3000)
      // * redirect to profile page
      navigate('/profile', { replace: true })

      emailReset()
      passwordReset()
      passwordConfirmationReset()
    } catch (error) {
      alert(error.message)
    }
  }

  const changePurposeHandler = () => {
    setTryingToLoggin((prevState) => !prevState)
  }
  return (
    <div className={styles.auth}>
      <h2>{tryingToLoggin ? 'LOGIN' : 'SIGNUP'}</h2>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="email"
            value={email}
            ref={emailRef}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
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

        <div className={styles.actions}>
          {!isLoading && (
            <button
              className={styles.submit}
              type="submit"
              ref={btnActionRef}
              disabled={!formIsValid}
            >
              {tryingToLoggin ? 'LOGIN' : 'SIGNUP'}{' '}
            </button>
          )}
          {isLoading && <p>loading ... </p>}
          <button type="button" onClick={changePurposeHandler}>
            {tryingToLoggin
              ? 'create new account'
              : 'already have account, login insted'}
          </button>
        </div>
      </form>
    </div>
  )
}

// * validation for email field prior to building custom hook
// const [email, setEmail] = useState('')
// const [emailTouched, setEmailTouched] = useState(false)
// const emailRef = useRef('')

// const emaiBlurHandler = () => {
//   setEmailTouched(true)
// }

// useEffect(() => {
//   if (emailTouched && !emailRef.current.value.includes('@')) {
//     emailRef.current.className = styles.invalid
//     console.log(emailRef)
//   } else {
//     emailRef.current.className = ''
//   }
// }, [emailTouched, email])

// ****************************
