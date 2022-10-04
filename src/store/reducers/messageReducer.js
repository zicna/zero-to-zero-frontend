import { LOGIN, LOGOUT, SIGNUP, CLEAR } from '../redux-action'

const initState = ''

const messageReducer = (state = initState, action) => {
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

export default messageReducer
