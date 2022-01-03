import { ActionType } from "../action-type/actionTypes";

export const AuthChanged = (user) => {
    return {
        type: ActionType.ON_AUTH_CHANGED,
        payload: user,
    };
};
export const LoginAction = (user) => {
    return {
        type: ActionType.IS_LOGGEDIN,
        payload: user,
    };
};

export const SignUpAction = (user) => {
    return {
        type: ActionType.IS_SIGNED_UP,
        payload: user,
    };
};
export const logoutAction = () => {
    return {
        type: ActionType.IS_LOGGED_OUT,
        payload: null,
    };
};

export const personalAction = (todos) => {
    return {
        type: ActionType.IS_FETCHED_PERSONAL,
        payload: todos,
    };
};
export const careerAction = (todos) => {
    return {
        type: ActionType.IS_FETCHED_CAREER,
        payload: todos,
    };
};
export const workAction = (todos) => {
    return {
        type: ActionType.IS_FETCHED_WORK,
        payload: todos,
    };
};
export const shopAction = (todos) => {
    return {
        type: ActionType.IS_FETCHED_SHOPPING,
        payload: todos,
    };
};

export const addShoppingTodo = () => {
    return {
        type: ActionType.ADD_SHOPPING_TODO,
    };
};
export const addPersonalTodo = () => {
    return {
        type: ActionType.ADD_PERSONAL_TODO,
    };
};
export const addCareerTodo = () => {
    return {
        type: ActionType.ADD_CAREER_TODO,
    };
};
export const addWorkTodo = () => {
    return {
        type: ActionType.ADD_WORK_TODO,
    };
};