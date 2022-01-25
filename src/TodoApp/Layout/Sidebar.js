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
        <Logo>My Todo</Logo>
        <div style={{ display: "flex", alignItems: "center" }}>
          <User>
            {dateTime.toLocaleTimeString().includes("PM") ? (
              <P>Good evening, {user?.displayName}</P>
            ) : (
              <P>Good morning, {user?.displayName}</P>
            )}
            {/* <TimeContainer>
              {dateTime.toLocaleDateString("en-NG", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </TimeContainer> */}
          </User>

          <Navs onClick={handleLogout}>Log out</Navs>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Sidebar;

const P = styled.div`
  font-size: 18px;
  font-size: bold;
  text-transform: capitalize;
  margin-right: 20px;
`;
const Logo = styled.div`
  margin: 0 20px;
  font-size: 25px;
  font-style: italic;
`;
const Navs = styled.div`
  margin: 0 20px;
  padding: 10px 15px;
  border: 1px solid white;
  cursor: pointer;
`;

const User = styled.div`
  display: flex;
`;
const Wrapper = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  background: red;
  height: 70px;
`;
