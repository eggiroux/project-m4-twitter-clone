import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import SingleTweet from "./Tweet/SingleTweet";
import Header from "./Header";
import Spinner from "./Spinner";
import Error from "./Error";

const TweetDetails = () => {
  const [isTweetLoaded, setIsTweetLoaded] = React.useState(false);
  const [fetchError, setFetchError] = React.useState(false);
  const [tweet, setTweet] = React.useState(null);
  const { tweetId } = useParams();
  const history = useHistory();

  const backButton = () => {
    history.push("/");
  };

  React.useEffect(() => {
    const fetchTweet = async () => {
      try {
        const response = await fetch(`/api/tweet/${tweetId}`);
        const tweet = await response.json();
        setTweet(tweet.tweet);
      } catch (err) {
        setFetchError(true);
      }
      setIsTweetLoaded(true);
    };
    if (!isTweetLoaded) {
      fetchTweet();
    }
  }, []);
  return (
    <Wrapper>
      <Header back={true} on>
        Meow
      </Header>
      {fetchError ? (
        <Error />
      ) : isTweetLoaded ? (
        <SingleTweet tweet={tweet} />
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

export default TweetDetails;
