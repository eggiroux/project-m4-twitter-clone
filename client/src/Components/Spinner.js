import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import { FiLoader } from "react-icons/fi";

const Spinner = ({ size }) => {
  const spinAnimation = useSpring({
    transform: `rotate(360)`,
    from: {
      transform: `rotate(0deg)`,
    },
    config: {
      tension: 1.5,
      friction: 0,
    },
  });
  return (
    <Wrapper>
      <AnimBox style={spinAnimation}>
        <FiLoader size={size} color="#666" />
      </AnimBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

const AnimBox = styled(animated.div)``;

export default Spinner;
