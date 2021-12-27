import { combineReducers } from "redux";
import { LoginReducer, signUpReducer } from "./Reducers";

export const allReducers = combineReducers({
    login: LoginReducer,
    // signup: signUpReducer,
});