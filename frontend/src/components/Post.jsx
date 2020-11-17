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

export default function Post(props) {
  const { post } = props;
  return (
    <Root>
      <Header>
        <Profile>
          <ProfilePicture
            draggable="false"
            src={post.user.img_profile}
          />
          <ProfileNickname>{post.user.name}</ProfileNickname>
        </Profile>
        <ThreePoints />
      </Header>
      <ImagePost>
        <Image src={post.image} />
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
          <ProfileNickname>{post.user.name}</ProfileNickname>
          <Description>{post.description}</Description>
        </Comment>
        {post.comments.map((comment) => {
          return (
            <Comment>
              <ProfileNickname>{comment.name}</ProfileNickname>
              <Description>{comment.comment}</Description>
            </Comment>
          );
        })}

        <Date>2 DAYS AGO</Date>
      </Detail>
      <SendComment>
        <Input placeholder="Add a Comment..." />
        <Send>Post</Send>
      </SendComment>
    </Root>
  );
}
