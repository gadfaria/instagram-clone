import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import Modal from "./Modal";
import Plus from "../assets/plus.png";
import defaultProfile from "../assets/default_profile.jpg";
import { IMG_URL, SERVER_URL } from "../utils/const";

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

const AddDiv = styled.div`
  margin-bottom: 15px;
  width: 66px;
  height: 66px;
  border-radius: 70px;
  background: #fafafa;
  ${FlexCenter}
  border: 1px solid rgba(219, 219, 219);
`;

const AddImage = styled.img`
  cursor: pointer;
  width: 40px;
  height: 40px;
  border-radius: 66px;
`;

export default function Stories(props) {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${SERVER_URL}/story`, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${props.user.token}`,
        },
      });

      const responseObject = await response.json();
      if (response.status === 200) {
        setUsers(responseObject);
      }
    })();
  }, []);

  return (
    <Root>
      <Story>
        <AddDiv
          onClick={() => {
            // setShowModal(true);
          }}
        >
          <AddImage draggable="false" src={Plus} />
        </AddDiv>
      </Story>

      {console.log("aaa", users)}
      {users &&
        users.map((user, index) => {
          return (
            <Story>
              <ImageBorder
                onClick={() => {
                  setIndex(index);
                  setShowModal(true);
                }}
              >
                <ProfileImage
                  draggable="false"
                  src={
                    user.img_profile
                      ? `${IMG_URL}/${user.img_profile}.jpg`
                      : defaultProfile
                  }
                />
              </ImageBorder>

              <ProfileNickname>{user.name}</ProfileNickname>
            </Story>
          );
        })}

      {users && <Modal
        user={users[index]}
        closeModal={() => {
          setShowModal(false);
        }}
        showModal={showModal}
      />}
    </Root>
  );
}
