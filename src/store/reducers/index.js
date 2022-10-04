import { combineReducers } from "redux";
import messageReducer from "./messageReducer";
import languageReducer from './languageReducer'
import levelReducer from "./levelReducer";
import questionReducer from "./questionReducer";
import userReducer from "./userReducer";


export default combineReducers({
   message: messageReducer,
   languages: languageReducer,
   user: userReducer,
   levels: levelReducer,
   questions: questionReducer
})