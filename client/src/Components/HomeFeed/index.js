import React from "react";
import styled from "styled-components";

import Header from "../Header";
import ComposeTweet from "./ComposeTweet";
import Feed from "./Feed";

const HomeFeed = () => {
  return (
    <Wrapper>
      <Header title="Home" />
      <ComposeTweet />
      <Feed />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  max-width: 650px;
  border: 1px lightgrey solid;
  border-top: none;
  position: relative;
`;

export default HomeFeed;
