import React from "react";
import styled from "styled-components";
import { RiTodoLine } from "react-icons/ri";
import Done from "../Layout/DOne";
import data from "../data/data.json";
import { AddBtn } from "../Layout/helpers.js";
import { AddNew } from "../Layout/helpers.js";

const Todo = () => {
  const [newTask, setNewTask] = React.useState(false);
  const categories = [
    {
      id: 1,
      category: "personal",
    },
    {
      id: 2,
      category: "career",
    },
    {
      id: 3,
      category: "chores",
    },
  ];

  const handleNewTask = (id) => {
    setNewTask(id, true);
  };
  return (
    <Container>
      <Wrapper>
        {categories.map((prop) => (
          <Card>
            <Category>Personal</Category>
            {data.map((data) => (
              <CardContent key={data.id}>
                <IconHolder>
                  <RiTodoLine />
                </IconHolder>
                <TodoItem>{data.task}</TodoItem>
                <Done />
              </CardContent>
            ))}
            {newTask && <AddNew handleClose={() => setNewTask(false)} />}
            <AddBtn newTask={handleNewTask} id={prop.id} />
          </Card>
        ))}
      </Wrapper>
    </Container>
  );
};

export default Todo;
const Button = styled.div`
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
const TodoItem = styled.div``;
const IconHolder = styled.div``;
const CardContent = styled.div`
  margin: 15px 10px;
  width: 370px;
  height: 40px;
  background: white;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;
const Category = styled.div`
  font-size: 12px;
  background: red;
  position: absolute;
  right: 20px;
  top: 10px;
  min-width: 70px;
  height: 15px;
  background: white;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  min-width: 400px;
  margin: 20px;
  height: 100%;
  min-height: 200px;
  background: red;
  border-radius: 4px;
  position: relative;
  display: flex;
  justify-content: center;
  padding: 20px 10px;
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
