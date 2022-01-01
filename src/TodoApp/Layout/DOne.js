import { useEffect, useState } from "react";
import { MdDownloadDone, MdFreeCancellation } from "react-icons/md";
import styled from "styled-components";
import { firestore } from "../Firebase/firebase";
import { doc, updateDoc } from "firebase/firestore";
const Done = ({ done, id, collection }) => {
  const [complete, setComplete] = useState(done);

  const handleComplete = () => {
    setComplete(true);
    const todoRef = doc(firestore, collection, id);
    const updateTask = {
      done: true,
    };
    updateDoc(todoRef, updateTask);
  };

  // useEffect(() =>{

  // })
  return (
    <Container>
      {complete ? (
        <IconHolder onClick={handleComplete} cl="green">
          <MdDownloadDone />
        </IconHolder>
      ) : (
        <IconHolder onClick={handleComplete} cl="red">
          <MdFreeCancellation />
        </IconHolder>
      )}
    </Container>
  );
};

export default Done;
// const Container = styled.div``;
const IconHolder = styled.div`
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: ${({ cl }) => cl};
`;

const Container = styled.div``;
