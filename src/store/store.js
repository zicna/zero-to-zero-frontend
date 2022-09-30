import React from 'react'
import { createStore } from 'redux'
import { LOGIN, LOGOUT, SIGNUP, CLEAR } from './redux-action'

const reducerFunction = (state = { message: '' }, action) => {
  switch (action.type) {
    case LOGIN:
      return { message: 'successfuly loged in' }
    case LOGOUT:
      return { message: 'successfuly loged out' }
    case SIGNUP:
      return { message: 'new user created' }
    case CLEAR:
      return { message: '' }
    default:
      return state
  }
}

const store = createStore(reducerFunction)

export default store
