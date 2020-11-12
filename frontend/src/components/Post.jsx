import React from "react";
import styled from "styled-components";
import { Cloud, Direct, Heart, ThreePoints, Flag } from "../utils/icons";
import { FlexCenter } from "../utils/HelperStyles";

const Root = styled.div`
  height: 850px;
  border: 1px solid rgba(219, 219, 219);
  border-radius: 3px;
  background: #ffffff;
  margin-bottom: 25px;
  display: grid;
  grid-template-rows: 0.1fr 1fr 0.07fr 0.15fr 0.1fr;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 15px;
  justify-content: space-between;
`;

const Profile = styled.div`
  ${FlexCenter}
  cursor: pointer;
`;

const ProfilePicture = styled.img`
  width: 32px;
  height: 32px;
  border: 1px solid #bebebe;
  border-radius: 32px;
`;

const ProfileNickname = styled.span`
  margin-left: 14px;
  font-weight: 500;
  font-size: 14px;
`;

const ImagePost = styled.div`
  ${FlexCenter}
  overflow: hidden;
`;

const Image = styled.img`
  height: 614px;
  width: 614px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
`;

const Button = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

const SendComment = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  border-top: 1px solid rgba(var(--ce3, 239, 239, 239), 1);
`;

const Input = styled.input`
  border: 0px;
  font-size: 15px;
  &::placeholder {
    color: #969696;
  }
  outline: none;
`;

const Send = styled.span`
  color: #b2dffc;
  cursor: pointer;
`;

const Detail = styled.div``;

const Description = styled.span`
  margin-left: 5px;
`;

const Comment = styled.div`
  margin-bottom: 5px;
`;

const Date = styled.span`
  margin-left: 14px;
  font-weight: 400;
  font-size: 11px;
  color: rgb(142, 142, 142);
`;

export default function Post() {
  return (
    <Root>
      <Header>
        <Profile>
          <ProfilePicture
            draggable="false"
            src="https://instagram.fppy5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120349966_335632174540767_2000384469165519766_n.jpg?_nc_ht=instagram.fppy5-1.fna.fbcdn.net&amp;_nc_ohc=9u7zDVnfTdgAX-HWwN6&amp;_nc_tp=25&amp;oh=aa0c11ad366ac6e9e1a3bc9fe781e111&amp;oe=5FD62524"
          />
          <ProfileNickname>zapelimbrasil</ProfileNickname>
        </Profile>
        <ThreePoints />
      </Header>
      <ImagePost>
        <Image src="https://instagram.fppy5-1.fna.fbcdn.net/v/t51.2885-15/e35/124317900_825301914870709_7874643191822657663_n.jpg?_nc_ht=instagram.fppy5-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=RWOExczAoG8AX8tSb46&tp=18&oh=d9ccdc23f7ccf09cb302b9c6fa9f6b5e&oe=5FD6F622" />
      </ImagePost>
      <Buttons>
        <div style={{ display: "flex" }}>
          <Button>
            <Heart />
          </Button>
          <Button>
            <Cloud />
          </Button>
          <Button>
            <Direct />
          </Button>
        </div>
        <Flag />
      </Buttons>
      <Detail>
        <Comment>
          <ProfileNickname>zapelimbrasil</ProfileNickname>
          <Description>Teste teste</Description>
        </Comment>
        <Comment>
          <ProfileNickname>gabiru</ProfileNickname>
          <Description>Teste teste</Description>
        </Comment>
        <Comment>
          <ProfileNickname>gabiru2</ProfileNickname>
          <Description>Teste teste</Description>
        </Comment>
        <Date>2 DAYS AGO</Date>
      </Detail>
      <SendComment>
        <Input placeholder="Add a Comment..." />
        <Send>Post</Send>
      </SendComment>
    </Root>
  );
}
