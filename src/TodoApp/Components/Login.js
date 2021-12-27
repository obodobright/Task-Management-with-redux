import React from "react";
import styled from "styled-components";
import { Form } from "../Layout/Form";

export const Login = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
      <Form />
    </Container>
  );
};

const Wrapper = styled.div`
  width: 400px;
  height: 100%;
  min-height: 100vh;
  background: red;
  position: absolute;
  top: 0;
  left: 0;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  //   display: flex;
  //   justify-content: center;
`;
