import { useState } from "react";
import { auth } from "../Firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { LoginAction } from "../Redux/action/Actions";

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const login = async(email, password) => {
        setLoading(true);
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            dispatch(LoginAction(res.user));
            console.log(res.user);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            console.log(error.message);
        }
    };
    return { loading, error, login };
};