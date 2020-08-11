import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";

import useKeydown from "../../Hooks/use-keydown.hook";
import { clickOnSelectedLink } from "../../handlers";

import { TweetContext } from "./TweetContext";

import Avatar from "../Avatar";
import ActionBar from "./ActionBar";

const SingleTweet = () => {
  const {
    status,
    displayName,
    timestamp,
    handle,
    avatarSrc,
    media,
  } = React.useContext(TweetContext);

  const date = moment(timestamp).format("h:mm A • MMM Do, YYYY");

  const history = useHistory();

  let mediaType;
  let mediaSrc;

  const buttonToProfile = (ev) => {
    history.push(`/${handle}`);
    ev.stopPropagation();
  };

  useKeydown("Enter", clickOnSelectedLink);

  if (media[0]) {
    mediaType = media[0].type;
    mediaSrc = media[0].url;
  }

  return (
    <Wrapper>
      <UserInfo>
        <Avatar size="50px" avatarSrc={avatarSrc} margin="10px" />
        <div>
          <Name>
            <Link tabIndex="0" onClick={buttonToProfile}>
              {displayName}{" "}
            </Link>
          </Name>
          <Handle>@{handle}</Handle>
        </div>
      </UserInfo>
      <Tweet>
        <Status>{status}</Status>
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

const Name = styled.div`
  font-weight: bold;
`;

const Handle = styled.p`
  font-weight: 300;
  margin-top: 5px;
`;

const Link = styled.p`
  width: fit-content;
  text-decoration: none;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const Tweet = styled.div`
  margin: 0px 15px;
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
