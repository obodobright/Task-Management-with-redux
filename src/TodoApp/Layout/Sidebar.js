import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../Layout/Active.css";
import Todo from "../Components/Todo";
// import {firestore} from "../Firebase/firebase"
// import {au} from "firebase/auth"

const Sidebar = () => {
  return (
    <Container>
      <Wrapper>
        <User>
          <p>Good Afternoon User</p>
        </User>
        <NavHolder>
          <Nav to="/" activestyle="active">
            All Todo
          </Nav>
          <Nav to="/">Create</Nav>
        </NavHolder>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const Nav = styled(NavLink)`
  font-size: 18px;
  padding: 10px;

  margin: 10px 0;
  border-radius: 10px 0;
  text-decoration: none;
  color: black;
  background: white;
  // &.active {
  // }
`;
const NavHolder = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;
const User = styled.div`
  //   padding: 30px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`;
const Wrapper = styled.div`
  position: fixed;
  width: inherit;
`;
const Container = styled.div`
  width: 300px;
  min-width: 300px;
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
  height: 100%;
  background: blue;
`;
