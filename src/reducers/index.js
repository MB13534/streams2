import { combineReducers } from "redux";
//reducer is a premade reducer from redux-form, change the name to formReducer
import { reducer as formReducer } from "redux-form";

import authReducer from "./authReducer";

export default combineReducers({
  auth: authReducer,
  //the redux-form reducer must be called form
  form: formReducer,
});
