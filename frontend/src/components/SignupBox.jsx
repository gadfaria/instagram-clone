import React, { useState } from "react";
import styled from "styled-components";
import { useSnackbar } from "react-simple-snackbar";
import { SERVER_URL } from "../utils/const";
import { FlexCenter } from "../utils/HelperStyles";
import Input from "./Input";
import defaultProfile from "../assets/default_profile.jpg";
import logoInsta from "../assets/logo-insta-login.png";

const Root = styled.div`
  height: 500px;
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

const Logo = styled.img`
  width: 200px;
  padding-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const ImageDiv = styled.div`
  width: 170px;
  height: 170px;
  border-radius: 170px;

  background-color: #243447;

  overflow: hidden;
`;

const InputHidden = styled.input`
  display: none;
`;

async function doSignUp(form, openSnackbar) {
  try {
    let response = await fetch(`${SERVER_URL}/user`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: form.name,
        username: form.username,
        password: form.password,
        image: form.image,
      }),
    });
    const responseObject = await response.json();
    if (response.status === 200) {
      openSnackbar("Registration successful");
      return true;
    } else {
      openSnackbar(responseObject.error.message);
      return false;
    }
  } catch (err) {
    return false;
  }
}

export default function SignupBox(props) {
  const { history } = props;
  const [openSnackbar] = useSnackbar();
  const [form, setForm] = useState({
    image: "",
    name: "",
    username: "",
    password: "",
  });

  return (
    <Root>
      <Logo src={logoInsta} alt="" loading="lazy" />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "18px",
        }}
      >
        <ImageDiv onClick={() => document.getElementById("gallery")?.click()}>
          {form.image === "" ? (
            <Image src={defaultProfile} />
          ) : (
            <Image src={form.image} />
          )}
        </ImageDiv>

        <InputHidden
          id={"gallery"}
          type="file"
          accept="image/png, image/jpeg"
          onChange={(evt) => {
            if (evt.target.files) {
              let file = evt.target.files[0];
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                setForm({ ...form, image: reader.result });
              };
            }
          }}
        />
      </div>

      <Input
        label={"Full Name"}
        value={form.name}
        type="text"
        onChange={(evt) => setForm({ ...form, name: evt.target.value })}
      />

      <Input
        label={"Username"}
        value={form.username}
        type="text"
        onChange={(evt) => setForm({ ...form, username: evt.target.value })}
      />

      <Input
        label={"Password"}
        value={form.password}
        type="password"
        onChange={(evt) => setForm({ ...form, password: evt.target.value })}
      />

      <Button
        disabled={
          !(
            form.username.length > 0 &&
            form.name.length > 0 &&
            form.password.length > 5
          )
        }
        onClick={async () => {
          if (await doSignUp(form, openSnackbar)) history.push("/");
        }}
      >
        Sign Up
      </Button>
    </Root>
  );
}
