import React from "react";
import styled from "styled-components";

import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

const ActionBar = ({ numLikes, numRetweets }) => {
  return (
    <Wrapper>
      <FiMessageCircle />
      <Action>
        <FiRepeat /> <Amount>{numLikes}</Amount>
      </Action>
      <Action>
        <FiHeart />
        <Amount>{numRetweets}</Amount>
      </Action>
      <FiShare />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  &:last-child {
    padding-right: 75px;
  }
`;

const Action = styled.div`
  display: flex;
  justify-content: center;
`;

const Amount = styled.span`
  color: black;
  margin-top: 0;
  margin-left: 5px;
`;

export default ActionBar;
