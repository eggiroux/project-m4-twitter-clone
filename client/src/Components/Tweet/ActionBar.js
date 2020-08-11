import React from "react";
import styled from "styled-components";

import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";

const ActionBar = () => {
  return (
    <Wrapper>
      <FiMessageCircle />
      <Retweets>
        <FiRepeat /> <Amount>5</Amount>
      </Retweets>

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

const Retweets = styled.div`
  display: flex;
  justify-content: center;
`;

const Amount = styled.span`
  color: black;
  margin-top: 0;
  margin-left: 5px;
`;

export default ActionBar;
