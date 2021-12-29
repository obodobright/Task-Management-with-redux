import { combineReducers } from "redux";
import { fetchTodo, LoginReducer } from "./Reducers";

export const allReducers = combineReducers({
    login: LoginReducer,
    allTodos: fetchTodo,
});