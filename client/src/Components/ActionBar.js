import React from "react";
import styled from "styled-components";

import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

const ActionBar = () => {
  return (
    <Wrapper>
      <FiMessageCircle />
      <FiRepeat />
      <FiHeart />
      <FiShare />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 75px;
  width: 75%;

  /* &:last-child {
    margin-right: 75px;
  } */
`;

export default ActionBar;
