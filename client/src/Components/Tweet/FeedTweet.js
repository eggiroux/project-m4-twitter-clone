import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";

import Avatar from "../Avatar";
import ActionBar from "./ActionBar";
import { FiRepeat } from "react-icons/fi";

const FeedTweet = ({ tweet }) => {
  const date = moment(tweet.timestamp).format(" • MMM Do");
  const history = useHistory();

  let mediaType;
  let mediaSrc;
  let retweetedFrom;

  const buttonToTweetDetails = () => {
    history.push(`/tweet/${tweet.id}`);
  };

  const buttonToProfile = (ev) => {
    history.push(`/${tweet.author.handle}`);
    ev.stopPropagation();
  };

  if (tweet.media[0]) {
    mediaType = tweet.media[0].type;
    mediaSrc = tweet.media[0].url;
  }

  if (tweet.retweetFrom) {
    retweetedFrom = tweet.retweetFrom.displayName;
  }

  return (
    <Wrapper onClick={buttonToTweetDetails}>
      <Avatar size="50px" avatarSrc={tweet.author.avatarSrc} margin="10px" />
      <Body>
        {retweetedFrom && (
          <RetweetedFrom>
            <FiRepeat />
            <span>{retweetedFrom} retweeted</span>
          </RetweetedFrom>
        )}
        <Name>
          <Link onClick={buttonToProfile}>{tweet.author.displayName} </Link>
          <Details>
            @{tweet.author.handle}
            {date}
          </Details>
        </Name>
        <Status>{tweet.status}</Status>
        {mediaType === "img" && <Media src={mediaSrc}></Media>}
        <ActionBar />
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  padding: 25px 0px;
  align-items: flex-start;
  border-bottom: 1px lightgrey solid;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 15px 0 0;
`;

const RetweetedFrom = styled.p`
  font-weight: 300;
  margin: -25px 0 10px -25px;
  & span {
    margin-left: 10px;
  }
`;

const Name = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: column;
`;

const Link = styled.p`
  width: fit-content;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Details = styled.span`
  font-weight: 300;
`;

const Media = styled.img`
  border-radius: 30px;
  width: 100%;
  margin-bottom: 15px;
`;

const Status = styled.p`
  font-weight: normal;
  margin: 15px 0 20px;
`;

export default FeedTweet;
