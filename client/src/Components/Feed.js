import React from "react";
import styled from "styled-components";

import TweetProvider from "./Tweet/TweetContext";

import Spinner from "./Spinner";
import FeedTweet from "./Tweet/FeedTweet";
import Error from "./Error";

const Feed = ({ feedUrl, isFeedLoaded, setIsFeedLoaded }) => {
  const [tweetsById, setTweetsById] = React.useState([]);
  const [tweetIds, setTweetsIds] = React.useState([]);
  const [feedError, setFeedError] = React.useState(false);

  React.useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(`${feedUrl}`);
        const feed = await response.json();
        setTweetsById(feed.tweetsById);
        setTweetsIds(feed.tweetIds);
      } catch (err) {
        setFeedError(true);
        console.log("showError triggered");
      }
      setIsFeedLoaded(true);
    };

    if (!isFeedLoaded) {
      fetchFeed();
    }
  }, [isFeedLoaded]);

  return (
    <Wrapper>
      {feedError ? (
        <Error />
      ) : isFeedLoaded ? (
        Object.values(tweetIds).map((id) => {
          return (
            <TweetProvider tweet={tweetsById[id]} key={id}>
              <FeedTweet />
            </TweetProvider>
          );
        })
      ) : (
        <Spinner size="50px" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-top: none;
  position: relative;
`;

export default Feed;
