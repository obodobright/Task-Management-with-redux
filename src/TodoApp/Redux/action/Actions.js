import { ActionType } from "../action-type/actionTypes";

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