import { LOAD } from '../redux-action'

const questionReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...action.payload.levels]
    default:
      return state
  }
}

export default questionReducer
