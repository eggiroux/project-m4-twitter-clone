import React from "react";

export const TweetContext = React.createContext(null);

const TweetProvider = ({ tweet, children }) => {
  const [numOfLikes, setNumOfLikes] = React.useState(tweet.numLikes);
  const [numOfRetweets, setNumOfRetweets] = React.useState(tweet.numRetweets);
  const [isLiked, setIsLiked] = React.useState(tweet.isLiked);
  const [isRetweeted, setIsRetweeted] = React.useState(tweet.isRetweeted);

  const handleToggleLike = async (ev) => {
    ev.stopPropagation();
    try {
      const response = await fetch(`/api/tweet/${tweet.id}/like`, {
        method: "PUT",
        body: JSON.stringify({ like: !isLiked }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        if (isLiked) {
          setNumOfLikes(numOfLikes - 1);
        } else {
          setNumOfLikes(numOfLikes + 1);
        }

        setIsLiked(!isLiked);
        //console.log("toggled isLiked successfully");
      }
    } catch (err) {
      console.log("tweet like error");
    }
  };

  const handleToggleRetweet = async (ev) => {
    ev.stopPropagation();
    try {
      const response = await fetch(`/api/tweet/${tweet.id}/retweet`, {
        method: "PUT",
        body: JSON.stringify({ retweet: !isRetweeted }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (data.success) {
        if (isRetweeted) {
          setNumOfRetweets(numOfRetweets - 1);
        } else {
          setNumOfRetweets(numOfRetweets + 1);
        }
        setIsRetweeted(!isRetweeted);

        // console.log("RT successfully");
      }
    } catch (err) {
      console.log("tweet RT error");
    }
  };
  return (
    <TweetContext.Provider
      value={{
        id: tweet.id,
        status: tweet.status,
        displayName: tweet.author.displayName,
        handle: tweet.author.handle,
        avatarSrc: tweet.author.avatarSrc,
        isRetweetedByCurrentUser: isRetweeted,
        isLikedByCurrentUser: isLiked,
        timestamp: tweet.timestamp,
        numOfLikes,
        numOfRetweets,
        handleToggleLike,
        handleToggleRetweet,
        media: tweet.media,
        retweetFrom: tweet.retweetFrom,
      }}
    >
      {children}
    </TweetContext.Provider>
  );
};

export default TweetProvider;
