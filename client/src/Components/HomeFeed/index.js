import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

import Header from "../Header";
import ComposeTweet from "./ComposeTweet";
import Feed from "./Feed";

const HomeFeed = () => {
  const { currentUser, isLoadingDone } = React.useContext(CurrentUserContext);
  const [isHomeFeedLoaded, setIsHomeFeedLoaded] = React.useState(false);
  const [homeFeed, setHomeFeed] = React.useState([]);

  console.log(homeFeed);

  React.useEffect(() => {
    const fetchHomeFeed = async () => {
      const response = await fetch(`/api/me/home-feed`);
      const homeFeed = await response.json();
      setHomeFeed(homeFeed);
    };

    if (isLoadingDone && !isHomeFeedLoaded) {
      fetchHomeFeed();
      setIsHomeFeedLoaded(true);
    }
  }, [isLoadingDone, homeFeed]);

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
  width: 65%;
  border: 1px lightgrey solid;
  border-top: none;
  position: relative;
`;

export default HomeFeed;
