import React, { useEffect } from "react";
import styled from "styled-components";
import { RiTodoLine } from "react-icons/ri";
import Done from "../Layout/DOne";
import { AddBtn } from "../Layout/helpers.js";
import { useFetch } from "../hooks/useFetch";
import { useSelector } from "react-redux";
import { useAdd } from "../hooks/useAdd";
import { useDispatch } from "react-redux";
import {
  personalAction,
  careerAction,
  workAction,
  shopAction,
  addCareerTodo,
  addPersonalTodo,
  addWorkTodo,
  addShoppingTodo,
} from "../Redux/action/Actions";
const Todo = () => {
  // useDispatch
  const dispatch = useDispatch();
  const { addNewTask } = useAdd();

  // PASSING ADD DATA TO ADDBTN COMPONENT
  const addPersonal = (task) => {
    addNewTask("personal", task);
    dispatch(addPersonalTodo());
  };
  const addCareer = (task) => {
    addNewTask("career", task);
    dispatch(addCareerTodo());
  };
  const addWork = (task) => {
    addNewTask("work", task);
    dispatch(addWorkTodo());
  };
  const addShopping = (task) => {
    addNewTask("shopping", task);
    dispatch(addShoppingTodo());
  };
  // STATES FROM REDUX
  const personal = useSelector((state) => state.allTodos.personal);
  const career = useSelector((state) => state.allTodos.career);
  const work = useSelector((state) => state.allTodos.work);
  const shopping = useSelector((state) => state.allTodos.shopping);

  //  USEFETCH TO FETCH DATA FROM FIREBASE BASE
  const { fetchTodo } = useFetch();
  // FUNCTIONS TO CALL DIFFERENT STATES FROM FIREBASE
  const personalTodo = () => {
    fetchTodo("personal", personalAction);
  };
  const careerTodo = () => {
    fetchTodo("career", careerAction);
  };
  const workTodo = () => {
    fetchTodo("work", workAction);
  };
  const shopTodo = () => {
    fetchTodo("shopping", shopAction);
  };
  // USEEFFECT CALLING DFIREBASE DATA
  useEffect(() => {
    personalTodo();
    careerTodo();
    workTodo();
    shopTodo();
  }, []);
  // RENDER
  return (
    <Container>
      <Wrapper>
        <Card>
          <Category>personal</Category>
          {personal?.map((data) => {
            return (
              <CardContent>
                <IconHolder>
                  <RiTodoLine />
                </IconHolder>
                <TodoItem>{data?.task}</TodoItem>
                <Done done={data?.done} />
              </CardContent>
            );
          })}
          {/* {newTask && <AddNew handleClose={() => setNewTask(false)} />} */}
          <AddBtn id={addPersonal} />
        </Card>
        <Card>
          <Category>career</Category>
          {career?.map((data) => {
            return (
              <CardContent>
                <IconHolder>
                  <RiTodoLine />
                </IconHolder>
                <TodoItem>{data?.task}</TodoItem>
                <Done done={data?.done} />
              </CardContent>
            );
          })}
          {/* {newTask && <AddNew handleClose={() => setNewTask(false)} />} */}
          <AddBtn id={addCareer} />
        </Card>
        <Card>
          <Category>work</Category>
          {work?.map((data) => (
            <CardContent>
              <IconHolder>
                <RiTodoLine />
              </IconHolder>
              <TodoItem>{data?.task}</TodoItem>
              <Done done={data?.done} />
            </CardContent>
          ))}
          {/* {newTask && <AddNew handleClose={() => setNewTask(false)} />} */}
          <AddBtn id={addWork} />
        </Card>
        <Card>
          <Category>shopping</Category>
          {shopping?.map((data) => (
            <CardContent>
              <IconHolder>
                <RiTodoLine />
              </IconHolder>
              <TodoItem>{data?.task}</TodoItem>
              <Done done={data?.done} />
            </CardContent>
          ))}
          {/* {newTask && <AddNew handleClose={() => setNewTask(false)} />} */}
          <AddBtn id={addShopping} />
        </Card>
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
