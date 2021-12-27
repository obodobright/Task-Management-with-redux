import { useState } from "react";
import { auth } from "../Firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { SignUpAction } from "../Redux/action/Actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export const useSignup = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isErr, setIsErr] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const signup = async(email, name, password) => {
        setIsLoading(true);
        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            if (res) {
                updateProfile(res.user, { displayName: name });
            }
            dispatch(SignUpAction(res.user));
            console.log(res.user);
            setIsLoading(false);
            navigate("/");
        } catch (error) {
            setIsLoading(false);
            console.log(error.message);
            setIsErr("AN error occured");
        }
    };
    return { isLoading, isErr, signup };
};