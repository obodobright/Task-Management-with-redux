import { firestore } from "../Firebase/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { fetchTodoAction } from "../Redux/action/Actions";
export const useFetch = () => {
    const dispatch = useDispatch();

    const fetchTodo = (ref, action) => {
        try {
            onSnapshot(collection(firestore, ref), (snapshot) => {
                const data = snapshot.docs.map((doc) => doc.data());
                console.log(data);
                dispatch(action(data));
            });
        } catch (error) {
            console.log(error.message);
        }
    };
    return { fetchTodo };
};