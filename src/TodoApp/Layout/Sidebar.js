import { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import "../Layout/Active.css";
import { useLogout } from "../hooks/useLogout";
import { AuthContext } from "../context/AuthProvider";

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  // FOR LOGOUT FUNCTION
  console.log(user);
  const { logout } = useLogout();
  // FUNCTION TO HANDLE LOGOUT
  const handleLogout = () => {
    logout();
  };
  // DATE AND TIME DISPLAY
  const dateTime = new Date();
  console.log(dateTime);
  return (
    <Container>
      <Wrapper>
        <User>
          {dateTime.toLocaleTimeString().includes("PM") ? (
            <P>Good evening, {user?.displayName}</P>
          ) : (
            <P>Good morning, {user?.displayName}</P>
          )}
          <TimeContainer>
            {dateTime.toLocaleDateString("en-NG", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </TimeContainer>
        </User>
        <NavHolder>
          <Nav to="/todo">All Todo</Nav>
        </NavHolder>
        <Navs onClick={handleLogout}>Log out</Navs>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const P = styled.div`
  font-size: 25px;
  font-size: bold;
  text-transform: capitalize;
`;
const TimeContainer = styled.div`
  font-size: 17px;
  color: white;
  font-size: bold;
  // padding: 20px;
`;
const Nav = styled(Link)`
  font-size: 18px;
  padding: 10px;
  margin: 10px 0;
  border-radius: 10px 0;
  text-decoration: none;
  color: black;
  background: white;
  &.active {
    color: red;
  }
`;
const Navs = styled.div`
  flex: 1;
  height: ;
  width: 100px;
  cursor: pointer;
  margin: 100px auto;
  border-radius: 3px;
  background: white;
  text-align: center;
  color: #122932;
`;
const NavHolder = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 100px;
`;
const User = styled.div`
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  flex-direction: column;
`;
const Wrapper = styled.div``;
const Container = styled.div`
  width: 300px;
  min-width: 300px;
  min-height: 100%;
  // height: 100%;
  background: #122932;
  color: white;
  font-weight: normal;
  line-height: 2rem;
`;

// const Container = styled.div`
//   width: 300px;
//   min-height: 100vh;
//   background: #122932;
//   position: fixed;
//   color: white;
//   font-weight: normal;
//   line-height: 2rem;
// `;

// display: flex;
//   flex-direction: row;
//   flex-wrap: nowrap;
//   width: 100%;
//   min-height: 100vh;
//   background: #ccc;
//   position: relative;
//   align-items: stretch;
//   background: red;
