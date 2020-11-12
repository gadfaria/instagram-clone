import React from "react";
import styled from "styled-components";
import SignupBox from "../components/SignupBox";
import { FlexCenter } from "../utils/HelperStyles";

const Root = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  ${FlexCenter};
  flex-direction: column;
  background: #fafafa;
  overflow-y: auto;
`;

const Login = styled.div`
  margin-top: 15px;
  height: 63px;
  width: 350px;
  border: 1px solid rgba(219, 219, 219);
  border-radius: 3px;
  background: #ffffff;
  ${FlexCenter}
  flex-direction: row;
  font-weight: 400;
  font-size: 14px;
`;

const Button = styled.span`
  margin-left: 3px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  color: rgb(0, 149, 246);
`;

export default function Signup() {
  return (
    <Root>
      <SignupBox />
      <Login>
        Have an account? <Button> Log In </Button>
      </Login>
    </Root>
  );
}
