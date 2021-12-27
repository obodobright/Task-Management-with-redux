import styled from "styled-components";

const Sidebar = () => {
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default Sidebar;

const Wrapper = styled.div``;
const Container = styled.div`
  width: 300px;
  position: fixed;
  height: 100%;
  background: blue;
`;
