import { addDoc, collection, doc } from "firebase/firestore";
import { firestore } from "../Firebase/firebase";

export const useAdd = () => {
    const addNewTask = async(ref, task) => {
        try {
            const collectionRef = collection(firestore, ref);
            const payload = { task, done: false };
            await addDoc(collectionRef, payload);
        } catch (error) {
            console.log(error.message);
        }
    };
    return { addNewTask };
};