import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import { useAdd } from "../hooks/useAdd";
import { useDispatch } from "react-redux";

export const AddNew = ({ close, id }) => {
  const { addNewTask } = useAdd();
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (payload) => {
    return payload, close();
  };

  return (
    <Card>
      <InputHolder>
        <Input placeholder="Task name" value={task} onChange={(e) => setTask(e.target.value)} />
        <Button onClick={() => handleAdd(id(task))}>Add Task</Button>

        <CancelBtn onClick={close}>
          <FaTimes />
        </CancelBtn>
      </InputHolder>
    </Card>
  );
};

export const AddBtn = ({ newtask, id }) => {
  const [openAdd, setOpenAdd] = useState(newtask);
  const handleOpen = () => {
    setOpenAdd(true);
  };

  const handleClose = () => {
    setOpenAdd(false);
  };
  return (
    <>
      {openAdd && <AddNew close={handleClose} id={id} />}
      <AddButton onClick={handleOpen}>
        <BsPlusLg />
      </AddButton>
    </>
  );
};
const AddButton = styled.div`
  width: 40px;
  height: 40px;
  background: #122932;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  margin: 10px auto;
  cursor: pointer;
`;
const CancelBtn = styled.div`
  width: 40px;
  height: 40px;
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
  cursor: pointer;
`;

const Input = styled.input`
  width: 200px;
  height: 25px;
  border-radius: 2px;
  border: 1px solid lightgray;
  outline: none;
`;
const Button = styled.div`
  width: 100px;
  height: 20px;
  background: blue;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 13px;
  margin: 10px 0;
  margin-bottom: 40px;
  cursor: pointer;
`;
const InputHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  padding: 20px;
`;
const Card = styled.div`
  width: 250px;
  height: 210px;
  position: absolute;
  top: 0;
  left: 100px;
  background: rgb(0, 0, 0, 0.6);
`;
