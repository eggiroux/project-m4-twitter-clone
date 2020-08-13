import React from "react";
import styled from "styled-components";

import Header from "../Header";
import ComposeTweet from "./ComposeTweet";
import Feed from "../Feed";
import { CurrentUserContext } from "../CurrentUserContext";

import Error from "../Error";

const HomeFeed = () => {
  document.title = `Critter - Home`;
  const { userError } = React.useContext(CurrentUserContext);
  const [isFeedLoaded, setIsFeedLoaded] = React.useState(false);
  return (
    <Wrapper>
      {userError ? (
        <Error />
      ) : (
        <>
          <Header back={false}>Home</Header>
          <ComposeTweet
            isFeedLoaded={isFeedLoaded}
            onSubmit={setIsFeedLoaded}
          />
          <Feed
            feedUrl="/api/me/home-feed"
            isFeedLoaded={isFeedLoaded}
            setIsFeedLoaded={setIsFeedLoaded}
          />
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomeFeed;
