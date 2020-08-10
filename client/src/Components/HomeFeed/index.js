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
  return (
    <Wrapper>
      {userError ? (
        <Error />
      ) : (
        <>
          <Header back={false}>Home</Header>
          <ComposeTweet />
          <Feed feedUrl="/api/me/home-feed" />{" "}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default HomeFeed;
