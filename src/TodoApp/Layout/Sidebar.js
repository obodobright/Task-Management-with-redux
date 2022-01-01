import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../Layout/Active.css";
import { useState } from "react";

const Sidebar = () => {
  const [dateTime, setDateTime] = useState(new Date());
  console.log(dateTime);
  return (
    <Container>
      <Wrapper>
        <User>
          {dateTime.toLocaleTimeString().includes("PM") ? (
            <P>Good evening, Obodo</P>
          ) : (
            <P>Good morning, Obodo</P>
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

const P = styled.div`
  font-size: 25px;
  font-size: bold;
`;
const TimeContainer = styled.div`
  font-size: 17px;
  color: white;
  font-size: bold;
  // padding: 20px;
`;
const Nav = styled(NavLink)`
  font-size: 18px;
  padding: 10px;

  margin: 10px 0;
  border-radius: 10px 0;
  text-decoration: none;
  color: black;
  background: white;
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
const Wrapper = styled.div`
  position: relative;
  width: inherit;
`;
const Container = styled.div`
  width: 300px;
  min-width: 300px;
  box-sizing: border-box;
  position: relative;
  top: 0;
  bottom: 0;
  left: 0;
  min-height: 100vh;
  height: 100%;
  background: blue;
`;
