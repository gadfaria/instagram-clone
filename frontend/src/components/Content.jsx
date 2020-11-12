import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import Post from "./Post";
import Stories from "./Stories";

const Root = styled.div`
  /* display: grid; */
  width: 612px;
  /* background: green; */
  background: #fafafa;
  margin: 28px 13px;
`;

const Posts = styled.div`
  /* background: green; */
  /* border: 1px solid rgba(219, 219, 219); */
  /* border-radius: 3px; */
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
