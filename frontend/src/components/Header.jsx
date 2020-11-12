import React from "react";
import styled from "styled-components";
import { FlexCenter } from "../utils/HelperStyles";
import { Heart, Compass, Direct, House } from "../utils/icons";

const Root = styled.div`
  display: grid;
  grid-template-areas: ". Logo Search Buttons .";
  grid-column-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  padding: 12px 0px;
  background: #ffffff;
  border-bottom: solid 1px rgba(219, 219, 219);
  width: 100%;
  position: absolute;
  top: 0;
`;

const Logo = styled.a`
  grid-area: Logo;
  ${FlexCenter}/* margin-left: 1vw; */
`;

const Search = styled.input`
  grid-area: Search;
  text-align: center;
  width: 215px;
  height: 23px;
  font-size: 15px;
  background: #fafafa;
  border: solid 1px rgba(219, 219, 219);
  border-radius: 3px;
  margin-left: 4vw;
  outline: none;
  &::placeholder {
    color: #969696;
  }
`;

const Buttons = styled.div`
  grid-area: Buttons;
  margin-right: 4vw;
  ${FlexCenter}
`;

const Button = styled.div`
  cursor: pointer;
  margin-left: 20px;
`;

export default function Header() {
  return (
    <Root>
      <Logo href="#">
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
          loading="lazy"
        ></img>
      </Logo>
      <Search placeholder="Search" />
      <Buttons>
        <Button>
          <House />
        </Button>
        <Button>
          <Direct />
        </Button>
        <Button>
          <Compass />
        </Button>
        <Button>
          <Heart />
        </Button>
        <Button>
          <Heart />
        </Button>
      </Buttons>
    </Root>
  );
}
