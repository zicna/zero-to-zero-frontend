// import React from 'react'
import { createStore } from 'redux'
import reducer from './reducers/index'
// import { LOGIN, LOGOUT, SIGNUP, CLEAR } from './redux-action'

// const initState = {
//   message: '',
//   user: {},
//   languages: [],
//   levels: [],
//   questions: []
// }

// const reducerFunction = (state =initState, action) => {
//   switch (action.type) {
//     case LOGIN:
//       return { ...initState, message: 'successfuly loged in' }
//     case LOGOUT:
//       return { ...initState, message: 'successfuly loged out' }
//     case SIGNUP:
//       return { ...initState, message: 'new user created' }
//     case CLEAR:
//       return { ...initState, message: '' }
//     default:
//       return state
//   }
// }

const store = createStore(reducer)

export default store
