import React from "react";
import styled from "styled-components";

import { TweetContext } from "./TweetContext";

import { clickOnSelectedLink } from "../../handlers";
import { COLORS } from "../../constants";
import useKeydown from "../../Hooks/use-keydown.hook";

import Action from "./Action";
import Amount from "./Amount";
import LikeButton from "./LikeButton";
import ScaleIn from "./LikeButton/ScaleIn";
import { FiMessageCircle, FiRepeat, FiShare } from "react-icons/fi";

const ActionBar = () => {
  const {
    isRetweetedByCurrentUser,
    handleToggleRetweet,
    handleToggleLike,
    numOfLikes,
    numOfRetweets,
  } = React.useContext(TweetContext);

  useKeydown("Enter", clickOnSelectedLink);

  return (
    <Wrapper>
      <ActionArea>
        <Action color={COLORS.comment} tabIndex="0">
          <FiMessageCircle />
        </Action>
      </ActionArea>
      <ActionArea>
        <Action
          color={COLORS.retweet}
          onClick={handleToggleRetweet}
          tabIndex="0"
        >
          {isRetweetedByCurrentUser ? (
            <ScaleIn>
              <FiRepeat
                color={isRetweetedByCurrentUser ? COLORS.retweet : undefined}
              />
            </ScaleIn>
          ) : (
            <FiRepeat
              color={isRetweetedByCurrentUser ? COLORS.retweet : undefined}
            />
          )}
        </Action>
        <Amount isHidden={numOfRetweets === 0 ? "hidden" : "visible"}>
          {numOfRetweets}
        </Amount>
      </ActionArea>

      <ActionArea>
        <Action color={COLORS.like} onClick={handleToggleLike}>
          <LikeButton />
        </Action>
        <Amount isHidden={numOfLikes === 0 ? "hidden" : "visible"}>
          {numOfLikes}
        </Amount>
      </ActionArea>

      <ActionArea>
        <Action color={COLORS.comment} tabIndex="0">
          <FiShare />
        </Action>
      </ActionArea>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-left: 15px;

  &:last-child {
    padding-right: 75px;
  }
`;

const ActionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ActionBar;
