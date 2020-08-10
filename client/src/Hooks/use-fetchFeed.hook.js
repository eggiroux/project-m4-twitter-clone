import React from "react";

const useFetchFeed = async (feedUrl) => {
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
  console.log("before return", tweetsById, tweetIds, isFeedLoaded, feedError);
  return { tweetsById, tweetIds, isFeedLoaded, feedError };
};

export default useFetchFeed;
