import React from "react";
import styled from "styled-components/macro";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { TweetContext } from "./TweetContext";

import { clickOnSelectedLink } from "../../handlers";
import useKeydown from "../../Hooks/use-keydown.hook";

import Avatar from "../Avatar";
import ActionBar from "./ActionBar";
import { FiRepeat } from "react-icons/fi";
import { COLORS } from "../../constants";

const FeedTweet = () => {
  const {
    id,
    status,
    displayName,
    timestamp,
    handle,
    avatarSrc,
    media,
    retweetFrom,
  } = React.useContext(TweetContext);

  const date = moment(timestamp).format(" • MMM Do");
  const history = useHistory();

  let mediaType;
  let mediaSrc;
  let retweetedFrom;

  const buttonToTweetDetails = () => {
    history.push(`/tweet/${id}`);
  };

  const buttonToProfile = (ev) => {
    history.push(`/${handle}`);
    ev.stopPropagation();
  };

  if (media[0]) {
    mediaType = media[0].type;
    mediaSrc = media[0].url;
  }

  if (retweetFrom) {
    retweetedFrom = retweetFrom.displayName;
  }

  useKeydown("Enter", clickOnSelectedLink);

  return (
    <Wrapper
      onClick={buttonToTweetDetails}
      tabIndex="0"
      aria-label="view tweet"
    >
      <Avatar size="50px" avatarSrc={avatarSrc} margin="10px" />
      <Tweet>
        {retweetedFrom && (
          <RetweetedFrom>
            <FiRepeat />
            <span>{retweetedFrom} remeowed</span>
          </RetweetedFrom>
        )}
        <Name>
          <Link
            onClick={buttonToProfile}
            aria-label="view author profile"
            tabIndex="0"
          >
            {displayName}
          </Link>
          <Details>
            @{handle}
            {date}
          </Details>
        </Name>

        <Status>{status}</Status>
        {mediaType === "img" && <Media src={mediaSrc}></Media>}

        <ActionBar />
      </Tweet>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 35px 0px;
  margin-top: 5px;
  border-bottom: 1px lightgrey solid;
  width: 100%;

  &:focus {
    outline: 1px ${COLORS.highlight} solid;
  }
`;
const Tweet = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

const RetweetedFrom = styled.p`
  font-weight: 300;
  margin: -30px 0 10px -25px;
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
  width: 95%;
  margin-bottom: 15px;
`;

const Status = styled.p`
  font-weight: normal;
  margin: 15px 0 20px;
`;

export default FeedTweet;
