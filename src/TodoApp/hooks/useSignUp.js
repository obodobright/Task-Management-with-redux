import { useState, useContext } from "react";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ActionType } from "../Redux/action-type/actionTypes";
import { AuthContext } from "../context/AuthProvider";
export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isErr, setIsErr] = useState(null);
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const signup = async(email, name, password) => {
        setIsLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res) {
                updateProfile(res.user, { displayName: name });
            }
            dispatch({
                type: ActionType.IS_SIGNED_UP,
                payload: res.user,
            });
            console.log(res.user);
            setIsLoading(false);
            navigate("/todo");
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);
            switch (error.message) {
                case "Firebase: Error (auth/network-request-failed).":
                    return setIsErr("Connection failure");
                case "Firebase: Error (auth/email-already-in-use).":
                    return setIsErr("Email already in use");
                case "Firebase: Error (auth/wrong-password).":
                    return setIsErr("wrong email/password");
                case "Firebase: Error (auth/invalid-email).":
                    return setIsErr("Please input a valid email");
                case "Firebase: Password should be at least 6 characters (auth/weak-password).":
                    return setIsErr("Password should be at least 6 characters");
                case "Firebase: Error (auth/user-not-found).":
                    return setIsErr("User not found, please input a correct Email/password");
                default:
                    return setIsErr("An error occurred");
            }
        }
    };
    return { isLoading, isErr, signup };
};