import React from "react";
import styled from "styled-components";
import moment from "moment";

import Avatar from "../Avatar";
import ActionBar from "../ActionBar";
import { FiRepeat } from "react-icons/fi";

const FeedTweet = ({ tweet }) => {
  const date = moment(tweet.timestamp).format(" • MMM Do");

  let mediaType;
  let mediaSrc;
  let retweetedFrom;

  console.log(tweet);

  if (tweet.media[0]) {
    mediaType = tweet.media[0].type;
    mediaSrc = tweet.media[0].url;
  }

  if (tweet.retweetFrom) {
    retweetedFrom = tweet.retweetFrom.displayName;
  }

  return (
    <Wrapper>
      <Avatar size="50px" avatarSrc={tweet.author.avatarSrc} margin="10px" />
      <Body>
        {retweetedFrom && (
          <RetweetedFrom>
            <FiRepeat />
            <span>{retweetedFrom} retweeted</span>
          </RetweetedFrom>
        )}
        <Name>
          {tweet.author.displayName}{" "}
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
  margin: 40px 10px;
  padding-bottom: 20px;
  align-items: flex-start;
  border-bottom: 1px lightgrey solid;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const RetweetedFrom = styled.p`
  font-weight: 300;
  margin: -25px 0 10px -25px;
  & span {
    margin-left: 10px;
  }
`;

const Name = styled.p`
  font-weight: bold;
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
  margin: 15px 0;
`;

export default FeedTweet;
