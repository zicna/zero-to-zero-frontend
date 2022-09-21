import React from 'react'
import { useState, useRef } from 'react'

import { submitUser, LOGIN, SIGNUP } from '../helpers/fetchHelpers'

export default function SignUp() {
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

    submitUser(userObject, SIGNUP)

    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
  }
  return (
    <React.Fragment>
      <h2>SignUp</h2>
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
      </form>
    </React.Fragment>
  )
}
