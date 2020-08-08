import React from "react";
import styled from "styled-components";
import moment from "moment";

import Avatar from "./Avatar";
import ActionBar from "./ActionBar";
import { FiRepeat } from "react-icons/fi";

const SingleTweet = ({ tweet }) => {
  const date = moment(tweet.timestamp).format("h:mm A • MMM Do, YYYY");

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
      <UserInfo>
        <Avatar size="50px" avatarSrc={tweet.author.avatarSrc} margin="10px" />
        <Name>
          {tweet.author.displayName} <Handle>@{tweet.author.handle}</Handle>
        </Name>
      </UserInfo>
      <Tweet>
        <Status>{tweet.status}</Status>
        {mediaType === "img" && <Media src={mediaSrc}></Media>}
        <Details> {`${date} • Critter web app`}</Details>
      </Tweet>
      <ActionBar />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
  align-items: flex-start;
  border-bottom: 1px lightgrey solid;
`;
const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
`;

const Name = styled.p`
  font-weight: bold;
`;

const Handle = styled.p`
  font-weight: 300;
  margin-top: 5px;
`;

const Tweet = styled.div`
  margin: 15px;
`;

const Details = styled.div`
  font-weight: 300;
  margin-bottom: 20px;
`;

const Media = styled.img`
  border-radius: 30px;
  width: 100%;
  margin-bottom: 15px;
`;

const Status = styled.p`
  font-weight: normal;
  font-size: 22px;
  margin: 15px 0 20px;
`;

export default SingleTweet;
