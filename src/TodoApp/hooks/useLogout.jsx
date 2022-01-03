import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../Redux/action/Actions";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { ActionType } from "../Redux/action-type/actionTypes";

export const useLogout = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const logout = async () => {
    await auth.signOut();
    dispatch({
      type: ActionType.IS_LOGGED_OUT,
    });
    navigate("/");
  };
  return { logout };
};
