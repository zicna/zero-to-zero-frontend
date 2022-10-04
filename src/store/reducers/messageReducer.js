import { LOGIN, LOGOUT, SIGNUP, CLEAR, LOAD } from '../redux-action'

const messageReducer = (state = '', action) => {
  switch (action.type) {
    case LOGIN:
      return { message: 'successfully logged in' }
    case LOGOUT:
      return { message: 'successfuly loged out' }
    case SIGNUP:
      return { message: 'new user created' }
    case CLEAR:
      return { message: '' }
    case LOAD:
        return {message: action.payload.message}
    default:
      return state
  }
}

export default messageReducer
