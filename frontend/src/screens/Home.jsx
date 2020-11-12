import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Content from "../components/Content";
import User from "../components/User";
import { FlexCenter } from "../utils/HelperStyles";

const Root = styled.div`
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  ${FlexCenter};
  flex-direction: column;
  background: #fafafa;
  overflow-y: auto;
  /* background: blue; */
`;

const Container = styled.div`
  /* background: red; */
  background: #fafafa;
  display: flex;
  height: 100%;
  margin-top: 110px;
`;

export default function Home() {
  return (
    <Root>
      
      <Header />
      <Container>
        <Content />
        <User />
      </Container>
    </Root>
  );
}
