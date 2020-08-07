import React from "react";
import styled from "styled-components";

import Header from "../Header";
import ComposeTweet from "./ComposeTweet";
import Feed from "../Feed";
import { CurrentUserContext } from "../CurrentUserContext";

import Error from "../Error";

const HomeFeed = () => {
  const { userError } = React.useContext(CurrentUserContext);
  console.log(userError);
  return (
    <Wrapper>
      {userError ? (
        <Error />
      ) : (
        <>
          <Header title="Home" />
          <ComposeTweet />
          <Feed feedUrl="/api/me/home-feed" />{" "}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 750px;
  border: 1px lightgrey solid;
  border-top: none;
  position: relative;
`;

export default HomeFeed;
