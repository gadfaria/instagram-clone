import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import Input from "./Input";

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

export default function SignupBox() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  return (
    <Root>
      <Logo
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
        alt=""
        loading="lazy"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "18px",
        }}
      >
        <ImageDiv onClick={() => document.getElementById("gallery")?.click()}>
          {image === "" ? (
            <Image
              src={
                "https://scontent-ort2-1.cdninstagram.com/v/t51.2885-19/44884218_345707102882519_2446069589734326272_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com&_nc_ohc=2p8Oa_c8q90AX_YA6AL&oh=fab41393078616124036615c67f58ba9&oe=5FD5790F&ig_cache_key=YW5vbnltb3VzX3Byb2ZpbGVfcGlj.2"
              }
            />
          ) : (
            <Image src={image} />
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
                setImage(reader.result);
              };
            }
          }}
        />
      </div>

      <Input
        label={"Full Name"}
        value={name}
        type="text"
        onChange={(evt) => setName(evt.target.value)}
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
        disabled={
          !(username.length > 0 && name.length > 0 && password.length > 6)
        }
        onClick={() => {
          console.log("Login");
        }}
      >
        Log In
      </Button>
    </Root>
  );
}
