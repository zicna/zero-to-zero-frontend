import { LOAD } from '../redux-action'

const levelReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD:
      return [...action.payload.levels]
    default:
      return state
  }
}

export default levelReducer
