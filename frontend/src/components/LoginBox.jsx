import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import Input from "./Input";

const Root = styled.div`
  height: 380px;
  width: 350px;
  border: 1px solid rgba(219, 219, 219);
  border-radius: 3px;
  background: #ffffff;
  ${FlexCenter}
  flex-direction: column;
`;

const Button = styled.button`
  width: 256px;
  height: 30px;
  color: #ffffff;
  background: ${(props) => (!props.disabled ? "#0e95f6" : "#B2DFFC")};
  border: 1px solid ${(props) => (!props.disabled ? "#0e95f6" : "#B2DFFC")};
  border-radius: 3px;
  outline: none;
  cursor: ${(props) => (!props.disabled ? "pointer" : "initial")};
`;

const Image = styled.img`
  width:200px;
  padding-bottom: 60px;
`;

export default function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Root>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        alt=""
        loading="lazy"
      />

      <Input
        label={"Username"}
        value={username}
        type="text"
        onChange={(evt) => setUsername(evt.target.value)}
      />

      <Input
        label={"Password"}
        value={password}
        type="password"
        onChange={(evt) => setPassword(evt.target.value)}
      />

      <Button
        disabled={!(username.length > 0 && password.length > 6)}
        onClick={() => {
          console.log("Login");
        }}
      >
        Log In
      </Button>
    </Root>
  );
}
