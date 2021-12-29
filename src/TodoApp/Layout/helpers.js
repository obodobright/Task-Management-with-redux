import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { BsPlusLg } from "react-icons/bs";
import { useState } from "react";
export const AddNew = ({ close }) => {
  return (
    <Card>
      <InputHolder>
        <Input placeholder="Task name" />
        <Button>Add Task</Button>

        <CancelBtn onClick={close}>
          <FaTimes />
        </CancelBtn>
      </InputHolder>
    </Card>
  );
};

export const AddBtn = ({ newtask }) => {
  const [openAdd, setOpenAdd] = useState(newtask);
  const handleOpen = () => {
    setOpenAdd(true);
  };

  const handleClose = () => {
    setOpenAdd(false);
  };
  return (
    <>
      {openAdd && <AddNew close={handleClose} />}
      <AddButton onClick={handleOpen}>
        <BsPlusLg />
      </AddButton>
    </>
  );
};
const AddButton = styled.div`
  width: 40px;
  height: 40px;
  background: blue;
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
  width: 250px;
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
  height: 300px;
  //   //   max-width: 480px;
  //   //   margin: 200px auto;
  //   //   text-align: center;
  //   //   background-color: indianred;
  //   //   padding: 30px;
  //   //   border-radius: 10px;
  //   //   color: wheat;
  //   display: flex;
  //   background: red;
  //   justify-content: center;
  //   align-items: center;
  //   margin: 200px auto;
  //   width: 300px;
`;
const Card = styled.div`
  width: 450px;
  height: 310px;
  position: absolute;
  top: 0;
  left: 0;
  background: rgb(0, 0, 0, 0.6);
  //   width: 100%;
  //   height: 100%;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   background: rgb(0, 0, 0, 0.6);
`;
