import { ActionType } from "../action-type/actionTypes";

const initialState = {
    user: null,
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