import React from "react";
import styled from "styled-components";

export const TodoDetails = () => {
  return (
    <Container>
      <Wrapper>Todo Details</Wrapper>
    </Container>
  );
};

const Wrapper = styled.div``;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: red;
`;
