import styled from "styled-components";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { useSignup } from "../hooks/useSignUp";
import { Loadings } from "./Loader";

export const Form = () => {
  // form state
  const [toggleReg, setToggleReg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // hooks for registration and login
  const { loading, error, login } = useLogin();
  const { isLoading, isErr, signup } = useSignup();

  // functions to handle reg
  const handleLogin = () => {
    login(email, password);
  };

  const handleSignup = () => {
    signup(email, name, password);
  };

  const handleToggleReg = () => {
    setToggleReg(!toggleReg);
  };

  return (
    <Card>
      <LoginInfo>
        <Logo />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
      </LoginInfo>
      {toggleReg ? (
        <FormHolder>
          <Title>Log in</Title>
          <InputHolder>
            <Label>Email</Label>
            <Input
              placeholder="joe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputHolder>
          <InputHolder>
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputHolder>
          {loading && (
            <Button>
              <Loadings height={20} width={30} color="white" />
            </Button>
          )}
          {!loading && <Button onClick={handleLogin}>Login</Button>}
          <P>
            Don't have an account <span onClick={handleToggleReg}>Sign up</span>
          </P>
        </FormHolder>
      ) : (
        <FormHolder>
          <Title>Sign up</Title>
          <InputHolder>
            <Label>Name</Label>
            <Input placeholder="John Doe" value={name} onChange={(e) => setName(e.target.value)} />
          </InputHolder>
          <InputHolder>
            <Label>Email</Label>
            <Input
              placeholder="joe@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputHolder>
          <InputHolder>
            <Label>Password</Label>
            <Input
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputHolder>
          {isLoading && (
            <Button>
              <Loadings height={20} width={30} color="white" />
            </Button>
          )}
          {!isLoading && <Button onClick={handleSignup}>Sign Up</Button>}
          <P>
            Already have an account, <span onClick={handleToggleReg}>Log in</span>
          </P>
        </FormHolder>
      )}
    </Card>
  );
};

const P = styled.div`
  margin: 10px 0;
  span {
    cursor: pointer;
    color: blue;
  }
`;
const Title = styled.div`
  font-size: 20px;
  padding: 20px;
`;
const Input = styled.input`
  width: 400px;
  height: 30px;
  border: 1px solid lightgray;
  border-radius: 4px;
  padding-left: 5px;
  outline: 0;
`;
const Label = styled.div`
  padding: 5px 0;
`;
const InputHolder = styled.div`
  margin: 7px 0;
`;
const Button = styled.div`
  width: 400px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-top: 10px;
  background: red;
  color: white;
  cursor: pointer;
`;
const FormHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const Logo = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
`;
const LoginInfo = styled.div`
  background: red;
  width: 250px;
  height: 100%;
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;
const Card = styled.div`
  width: 800px;
  height: 100%;
  min-height: 70vh;
  margin-top: 30px;
  border-radius: ;
  display: flex;
  position: relative;
  left: 150px;
  top: 70px;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.75);
  //   justify-content: center;
  //   position: absolute;
  //   bottom: 20px;
`;
