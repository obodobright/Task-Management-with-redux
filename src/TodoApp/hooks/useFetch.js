import { firestore } from "../Firebase/firebase";
import { onSnapshot, collection } from "firebase/firestore";
import { useState } from "react";
export const useFetch = () => {
    const [myTask, setMyTask] = useState(null);

    const fetchTodo = () => {
        try {
            onSnapshot(collection(firestore, "todo"), (snapshot) => {
                const data = snapshot.docs.map((doc) => doc.data());
                console.log(data);
                setMyTask(data);
            });
        } catch (error) {
            console.log(error.message);
        }
    };
    return { fetchTodo, myTask };
};