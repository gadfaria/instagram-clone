import styled from "styled-components";
import React, { useState } from "react";
import { motion } from "framer-motion";

const InputDiv = styled.input`
  font-size: 12px;
  background: #fafafa;
  width: 80%;
  padding: 17px 12px 5px 12px;
  border: 0px;
  outline: none;
`;

const TextDiv = styled.span`
  width: 100%;
  color: #969696;
  font-size: 14px;
`;

const Root = styled.div`
  margin-bottom: 10px;
  background: #fafafa;
  position: relative;
  width: 256px;
  height: 38px;
  border: solid 1px rgba(219, 219, 219);
  border-radius: 3px;
`;

const placeholderStyle = {
  position: "absolute",
  bottom: 15,
  left: 10,
  scale: 1,
  pointerEvents: "none",
  originX: 0.1,
};

const initialPlaceholderState = {
  y: 5,
  scale: 1,
  opacity: 0.6,
};

const upperPlaceholderState = {
  y: -8,
  scale: 0.8,
  opacity: 0.6,
};

export default function Input(props) {
  let [inputFocus, setInputFocus] = useState(false);
  return (
    <Root>
      <motion.div
        style={placeholderStyle}
        animate={
          inputFocus || props.value.length > 0
            ? upperPlaceholderState
            : initialPlaceholderState
        }
      >
        <TextDiv>{props.label}</TextDiv>
      </motion.div>
      <InputDiv
        {...props}
        onFocus={() => setInputFocus(true)}
        onBlur={() => setInputFocus(false)}
      />
    </Root>
  );
}
