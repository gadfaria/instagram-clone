import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
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
`;

const Container = styled.div`
  background: #fafafa;
  display: flex;
  height: 100%;
  margin-top: 110px;
`;

export default function Home() {
  let history = useHistory();
  let user = JSON.parse(localStorage.getItem("@instagram/user"));
  let [verification, setVerification] = useState(false);

  useEffect(() => {
    if (!user) history.replace("/");
    setVerification(true);
  }, []);

  return !verification ? (
    <> </>
  ) : (
    <Root>
      <Header />
      <Container>
        <Content />
        <User user={user} history={history} />
      </Container>
    </Root>
  );
}
