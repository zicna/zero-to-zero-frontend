import { LOAD } from '../redux-action'

const languageReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      // debugger
      return [...action.payload.languages]
    default:
      return state
  }
}

export default languageReducer
