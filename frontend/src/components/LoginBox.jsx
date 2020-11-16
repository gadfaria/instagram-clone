import React, { useState } from "react";
import styled from "styled-components";
import { useSnackbar } from "react-simple-snackbar";
import { SERVER_URL } from "../utils/const";
import { FlexCenter } from "../utils/HelperStyles";
import Input from "./Input";
import logoInsta from "../assets/logo-insta-login.png";

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
  width: 200px;
  padding-bottom: 60px;
`;

async function doLogin(username, password, openSnackbar) {
  try {
    let response = await fetch(`${SERVER_URL}/login`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const responseObject = await response.json();
    if (response.status === 200) {
      localStorage.setItem(
        "@instagram/user",
        JSON.stringify({
          name: responseObject.user.name,
          id: responseObject.user.id,
          username: responseObject.user.username,
          token: responseObject.token,
          img_profile: responseObject.user.img_profile,
        })
      );
      openSnackbar("Login successful");
      return true;
    } else {
      openSnackbar(responseObject.error.message);
      return false;
    }
  } catch (err) {
    return false;
  }
}

export default function LoginBox(props) {
  const { history } = props;
  const [openSnackbar] = useSnackbar();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Root>
      <Image src={logoInsta} alt="" loading="lazy" />

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
        disabled={!(username.length > 0 && password.length > 5)}
        onClick={async () => {
          if (await doLogin(username, password, openSnackbar))
            history.replace("/home");
        }}
      >
        Log In
      </Button>
    </Root>
  );
}
