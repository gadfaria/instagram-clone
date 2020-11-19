import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 20px;
  height: 20px;
  box-sizing: border-box;
`;

const Circle = styled(motion.span)`
  display: block;
  width: 20px;
  height: 20px;
  border: 0.5rem solid #e9e9e9;
  border-top: 0.5rem solid #3498db;
  border-radius: 50%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  left: 0;
`;

const spinTransition = {
  loop: Infinity,
  ease: "linear",
  duration: 1,
};

export default function CircleLoader() {
  return (
    <Container>
      <Circle animate={{ rotate: 360 }} transition={spinTransition} />
    </Container>
  );
}
