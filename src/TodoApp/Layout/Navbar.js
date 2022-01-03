import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  return (
    <Container>
      <Wrapper>
        <Logo />

        <LinkHolder>
          <Links to="/">Home</Links>
          {user && (
            <>
              <Links to="/">My Todo</Links>
              <Links to="/">Settings</Links>
            </>
          )}
          <div style={{ flex: "1" }}></div>
          {user ? <LinkBtn>Logout</LinkBtn> : <Links to="login">Login</Links>}
        </LinkHolder>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const LinkBtn = styled.li`
  cursor: pointer;
`;
const Links = styled(Link)`
  margin: 0 20px;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;
const LinkHolder = styled.ul`
  margin: 0 20px;
  display: flex;
  list-style: none;
  flex: 1;
`;
const Logo = styled.div`
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 50%;
  margin: 0 20px;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  background: #122932;
  position: relative;
`;
