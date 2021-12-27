import { auth } from "../Firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAction } from "../Redux/action/Actions";

export const useLogout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logout = async () => {
    await auth.signOut();
    dispatch(logoutAction());
    navigate("login");
  };
  return { logout };
};
