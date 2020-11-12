import React, { useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import Modal from "./Modal";

const Root = styled.div`
  height: 118px;
  border: 1px solid rgba(219, 219, 219);
  border-radius: 3px;
  background: #ffffff;
  display: flex;
  align-items: center;
`;

const Story = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 15px;
`;

const ProfileImage = styled.img`
  cursor: pointer;
  width: 66px;
  height: 66px;
  border-radius: 66px;
`;

const ProfileNickname = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgb(38, 38, 38);
  padding-top: 5px;
`;

const ImageBorder = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 70px;
  background: linear-gradient(to right, red, purple);
  ${FlexCenter}
`;

export default function Stories() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Root>
      <Story>
        <ImageBorder
          onClick={() => {
            setShowModal(true);
          }}
        >
          <ProfileImage
            draggable="false"
            src="https://instagram.fppy5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120349966_335632174540767_2000384469165519766_n.jpg?_nc_ht=instagram.fppy5-1.fna.fbcdn.net&_nc_ohc=9u7zDVnfTdgAX-HWwN6&_nc_tp=25&oh=aa0c11ad366ac6e9e1a3bc9fe781e111&oe=5FD62524"
          />
        </ImageBorder>

        <ProfileNickname>Jao</ProfileNickname>
      </Story>

      <Modal
        closeModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
      />
    </Root>
  );
}
