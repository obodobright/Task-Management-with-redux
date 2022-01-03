import { combineReducers } from "redux";
import { fetchTodo, LoginReducer } from "./Reducers";

export const allReducers = combineReducers({
    allTodos: fetchTodo,
    login: LoginReducer,
});