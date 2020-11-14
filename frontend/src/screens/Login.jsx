import { AnimatePresence } from "framer-motion";
import React from "react";
import styled from "styled-components";
import ImagesLogin from "../components/ImagesLogin";
import LoginBox from "../components/LoginBox";
import { FlexCenter } from "../utils/HelperStyles";
import { useHistory } from "react-router-dom";

const Root = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  ${FlexCenter};
  flex-direction: row;
  background: #fafafa;
  overflow-y: auto;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
`;

const SignUp = styled.div`
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

export default function Login() {
  let history = useHistory();

  return (
    <AnimatePresence>
      <Root>
        <ImagesLogin />
        <Box>
          <LoginBox history={history} />
          <SignUp>
            Don't have an account?
            <Button
              onClick={() => {
                history.push("/signup");
              }}
            >
              Sign up
            </Button>
          </SignUp>
        </Box>
      </Root>
    </AnimatePresence>
  );
}
