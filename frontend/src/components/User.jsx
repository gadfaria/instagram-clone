import React from "react";
import styled from "styled-components";
import defaultProfile from "../assets/default_profile.jpg";
import { IMG_URL, SERVER_URL } from "../utils/const";

const Root = styled.div`
  width: 293px;
  height: 100px;
  margin: 28px 13px;
  background: #fafafa;
  display: flex;
  align-items: center;
`;

const ProfilePicture = styled.img`
  width: 56px;
  height: 56px;
  border: 1px solid #bebebe;
  border-radius: 32px;
`;

const ProfileNickname = styled.span`
  margin-left: 14px;
  font-weight: 600;
  font-size: 14px;
  color: rgb(38, 38, 38);
`;
const ProfileName = styled.span`
  margin-left: 14px;
  font-weight: 400;
  font-size: 14px;
  color: rgb(142, 142, 142);
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logout = styled.span`
  cursor: pointer;
  font-weight: 600;
  font-size: 13px;
  color: rgb(0, 149, 246);
  margin-left: 80px;
`;

async function doLogout(token) {
  try {
    console.log(token);
    let response = await fetch(`${SERVER_URL}/logout`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      localStorage.clear();
      return true;
    }
  } catch (err) {
    return false;
  }
}

export default function User(props) {
  const { user, history } = props;

  return (
    <Root>
      <ProfilePicture
        draggable="false"
        src={
          user.img_profile
            ? `${IMG_URL}/${user.img_profile}.jpg`
            : defaultProfile
        }
      />
      <Profile>
        <ProfileNickname>{user.username}</ProfileNickname>
        <ProfileName>{user.name}</ProfileName>
      </Profile>
      <Logout
        onClick={async () => {
          if (await doLogout(user.token)) history.replace("/");
        }}
      >
        Logout
      </Logout>
    </Root>
  );
}
