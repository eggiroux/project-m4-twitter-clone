import React from "react";

export const FeedContext = React.createContext(null);

const FeedProvider = ({ children }) => {
  const [isFeedLoaded, setIsFeedLoaded] = React.useState();
  const [feedError, setFeedError] = React.useState(false);
  const [tweetsById, setTweetsById] = React.useState([]);
  const [tweetIds, setTweetsIds] = React.useState([]);

  React.useEffect(() => {
    const fetchFeed = async () => {
      try {
        const response = await fetch(`${feedUrl}`);
        const feed = await response.json();
        if (!isLoadingDone) {
          setTweetsById(feed.tweetsById);
          setTweetsIds(feed.tweetIds);
          setIsFeedLoaded(true);
        }
      } catch (err) {
        console.log("caught!");
        setUserError(true);
        setIsLoadingDone(true);
      }
    };
    fetchFeed();
  }, []);

  return (
    <FeedContext.Provider
      value={{ isFeedLoaded, setIsFeedLoaded, feedError, tweetsById, tweetIds }}
    >
      {children}
    </FeedContext.Provider>
  );
};

export default CurrentUserProvider;
