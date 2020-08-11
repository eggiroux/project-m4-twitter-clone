import React from "react";
import styled from "styled-components";

import { TweetContext } from "./TweetContext";

import Action from "./Action";
import { FiMessageCircle, FiRepeat, FiHeart, FiShare } from "react-icons/fi";
import { COLORS } from "../../constants";

const ActionBar = () => {
  const {
    isRetweetedByCurrentUser,
    isLikedByCurrentUser,
    handleToggleRetweet,
    handleToggleLike,
    numOfLikes,
    numOfRetweets,
  } = React.useContext(TweetContext);

  React.useEffect(() => {}, [numOfLikes, numOfRetweets]);

  return (
    <Wrapper>
      <FiMessageCircle />
      <Action color={COLORS.retweet} onClick={handleToggleRetweet}>
        <FiRepeat
          color={isRetweetedByCurrentUser ? COLORS.retweet : undefined}
        />
        {numOfRetweets !== 0 && <Amount>{numOfRetweets}</Amount>}
      </Action>
      <Action color={COLORS.like} onClick={handleToggleLike}>
        <FiHeart color={isLikedByCurrentUser ? COLORS.like : undefined} />
        {numOfLikes !== 0 && <Amount>{numOfLikes}</Amount>}
      </Action>
      <FiShare />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-left: 15px;

  &:last-child {
    padding-right: 75px;
  }
`;

// const Action = styled.div`
//   display: flex;
//   justify-content: center;
// `;

const Amount = styled.span`
  color: black;
  margin-top: 0;
  margin-left: 5px;
`;

export default ActionBar;
