import { createContext, useReducer } from "react";
import { ActionType } from "../Redux/action-type/actionTypes";
export const AuthContext = createContext();

const reduceFunction = (state, action) => {
  switch (action.type) {
    case ActionType.IS_LOGGEDIN:
      return { user: action.payload, authReady: true };
    case ActionType.IS_SIGNED_UP:
      return { user: action.payload, authReady: true };
    case ActionType.IS_LOGGED_OUT:
      return { user: null, authReady: true };
    case ActionType.ON_AUTH_CHANGED:
      return { user: action.payload, authReady: true };
    default:
      return { state };
  }
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reduceFunction, { user: null, authReady: false });
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>
};
