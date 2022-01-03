import { useState, useContext } from "react";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { ActionType } from "../Redux/action-type/actionTypes";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const navigate = useNavigate();

    const { dispatch } = useContext(AuthContext);

    const login = async(email, password) => {
        setLoading(true);
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            dispatch({
                type: ActionType.IS_LOGGEDIN,
                payload: res.user,
            });
            navigate("/todo");
            console.log(res.user);
            setLoading(false);
            setErr(null);
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    };
    return { loading, err, login };
};