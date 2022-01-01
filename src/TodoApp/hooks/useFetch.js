import { firestore } from "../Firebase/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import { fetchTodoAction } from "../Redux/action/Actions";
export const useFetch = () => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState(null);

    const fetchTodo = (ref, action) => {
        try {
            setLoading(true);
            onSnapshot(collection(firestore, ref), (snapshot) => {
                const data = snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }));
                console.log(data);
                dispatch(action(data));
            });
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setErr("An error occured");
            console.log(error.message);
        }
    };
    return { fetchTodo, loading, err };
};