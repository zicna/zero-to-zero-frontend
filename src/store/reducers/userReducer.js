import { LOAD } from '../redux-action'

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return { ...action.payload.user }
    default:
      return state
  }
}

export default userReducer
