import React from "react";
import styled from "styled-components";

import Spinner from "./Spinner";
import FeedTweet from "./FeedTweet";
import Error from "./Error";

import { CurrentUserContext } from "./CurrentUserContext";

const Feed = ({ feedUrl }) => {
  const [isFeedLoaded, setIsFeedLoaded] = React.useState(false);
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
    };

    if (!isFeedLoaded) {
      fetchFeed();
      setIsFeedLoaded(true);
    }
  }, [isFeedLoaded, tweetsById, tweetIds, feedUrl]);

  return (
    <Wrapper>
      {feedError ? (
        <Error />
      ) : isFeedLoaded ? (
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
