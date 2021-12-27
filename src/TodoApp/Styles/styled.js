import styled from "styled-components";

export const Container = styled.div `
  width: 100%;
  height: 100%;
  min-height: ${({ mh }) => mh};
`;

export const Wrapper = styled.div `
  width: 100%;
  height: 100%;
  min-height: ${({ mh }) => mh};
  display: flex;
  justify-content: ${({ jf }) => jf};
  alignitems: ${({ ai }) => ai};
`;