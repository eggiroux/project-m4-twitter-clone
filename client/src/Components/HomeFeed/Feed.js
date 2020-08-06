import React from "react";
import styled from "styled-components";

import Spinner from "../Spinner";
import FeedTweet from "./FeedTweet";

const Feed = ({}) => {
  const [isFeedLoaded, setIsFeedLoaded] = React.useState(false);
  const [tweetsById, setTweetsById] = React.useState([]);
  const [tweetIds, setTweetsIds] = React.useState([]);

  React.useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetch(`/api/me/home-feed`);
      const feed = await response.json();
      setTweetsById(feed.tweetsById);
      setTweetsIds(feed.tweetIds);
    };

    if (!isFeedLoaded) {
      fetchFeed();
      setIsFeedLoaded(true);
    }
  }, [isFeedLoaded, tweetsById, tweetIds]);

  return (
    <Wrapper>
      {isFeedLoaded ? (
        Object.values(tweetIds).map((id) => {
          return <FeedTweet tweet={tweetsById[id]} key={id} />;
        })
      ) : (
        <Spinner size="50px" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px lightgrey solid;
  margin-top: 20px;
`;

export default Feed;
