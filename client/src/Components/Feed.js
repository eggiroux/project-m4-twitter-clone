import React from "react";
import styled from "styled-components";

import Spinner from "./Spinner";
import FeedTweet from "./FeedTweet";
import Error from "./Error";

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
      setIsFeedLoaded(true);
    };

    if (!isFeedLoaded) {
      fetchFeed();
    }
  }, []);

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
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  border-top: none;
  position: relative;
`;

export default Feed;
