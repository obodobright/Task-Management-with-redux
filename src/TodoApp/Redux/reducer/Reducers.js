import { ActionType } from "../action-type/actionTypes";

const initialState = {
    user: null,
};

const allTodos = {
    personal: [],
    career: [],
    work: [],
    shopping: [],
};

export const LoginReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionType.IS_LOGGEDIN:
            return { user: payload };
        case ActionType.IS_SIGNED_UP:
            return { user: payload };
        case ActionType.IS_LOGGED_OUT:
            return { user: payload };
        default:
            return { state };
    }
};

export const fetchTodo = (state = allTodos, { type, payload }) => {
    switch (type) {
        case ActionType.IS_FETCHED_PERSONAL:
            return { personal: payload };
        case ActionType.IS_FETCHED_WORK:
            return { work: payload };
        case ActionType.IS_FETCHED_SHOPPING:
            return { shopping: payload };
        case ActionType.IS_FETCHED_CAREER:
            return { career: payload };
        default:
            return { state };
    }
};