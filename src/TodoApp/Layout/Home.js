import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <ImageHolder>
            <Image></Image>
          </ImageHolder>
          <Content>
            <ContentTitle>Get Organized Your Life</ContentTitle>
            <Desc>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A quae ab fuga laborum
              quibusdam autem beatae. Commodi similique voluptatem nemo iusto dolor, optio odio
              accusantium? Provident saepe repellat ipsa praesentium.
            </Desc>
            <Button to="login">Get started</Button>
          </Content>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
const Desc = styled.div`
  font-size: 16px;
  line-height: 1.4;
`;
const ContentTitle = styled.div`
  font-size: 35px;
  margin-bottom: 20px;
`;
const Button = styled(Link)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin: 20px auto;
  cursor: pointer;
  background: #122932;
  color: white;
  text-decoration: none;
`;

const Content = styled.div`
  width: 400px;
  padding: 10px;
`;
const Image = styled.div`
  width: 300px;
  height: 300px;
  background: #122932;
  border-radius: 50%;
`;

const ImageHolder = styled.div``;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;
