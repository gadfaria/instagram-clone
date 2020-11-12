import React from "react";
import styled from "styled-components";
import Post from "./Post";
import Stories from "./Stories";

const Root = styled.div`
  width: 612px;
  background: #fafafa;
  margin: 28px 13px;
`;

const Posts = styled.div`
  background: #fafafa;
  margin-top: 25px;
`;

export default function Content() {
  return (
    <Root>
      <Stories />
      <Posts>
        <Post></Post>
        <Post></Post>
        <Post></Post>
      </Posts>
    </Root>
  );
}
