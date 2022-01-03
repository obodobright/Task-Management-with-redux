import { ActionType } from "../action-type/actionTypes";

const initialState = {
    user: null,
    AuthIsReady: false,
};

const allTodos = {
    personal: [],
    career: [],
    work: [],
    shopping: [],
};

export const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.IS_LOGGEDIN:
            return {...state, user: action.payload, AuthIsReady: true };
        case ActionType.IS_SIGNED_UP:
            return {...state, user: action.payload, AuthIsReady: true };
        case ActionType.IS_LOGGED_OUT:
            return {...state, user: action.payload, AuthIsReady: true };
        case ActionType.ON_AUTH_CHANGED:
            return {...state, user: action.payload, AuthIsReady: true };
        default:
            return { state };
    }
};

export const fetchTodo = (state = allTodos, { type, payload }) => {
    switch (type) {
        case ActionType.IS_FETCHED_PERSONAL:
            return {...state, personal: payload };
        case ActionType.IS_FETCHED_WORK:
            return {...state, work: payload };
        case ActionType.IS_FETCHED_SHOPPING:
            return {...state, shopping: payload };
        case ActionType.IS_FETCHED_CAREER:
            return {...state, career: payload };
        case ActionType.ADD_PERSONAL_TODO:
            return {...state };
        case ActionType.ADD_CAREER_TODO:
            return {...state };
        case ActionType.ADD_WORK_TODO:
            return {...state };
        case ActionType.ADD_SHOPPING_TODO:
            return {...state };
        default:
            return { state };
    }
};