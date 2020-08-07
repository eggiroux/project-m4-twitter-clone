import React from "react";
import styled from "styled-components";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import moment from "moment";

const ProfileInfos = ({
  handle,
  displayName,
  bio,
  isFollowingYou,
  location,
  joined,
  numFollowers,
  numFollowing,
}) => {
  const joinedDate = moment(joined).format("MMMM YYYY");
  return (
    <Wrapper>
      <DisplayName>{displayName}</DisplayName>
      <Handle>
        @{handle} {isFollowingYou && <FollowingTag>Follows you</FollowingTag>}
      </Handle>
      <Bio>{bio}</Bio>
      <WhenAndWhere>
        <FiMapPin />
        <Location> {location}</Location>
        <Joined>
          <FiCalendar /> Joined {joinedDate}
        </Joined>
      </WhenAndWhere>

      <Relationships>
        <strong>{numFollowing}</strong> Following
        <span>
          <strong>{numFollowers}</strong> Followers
        </span>
      </Relationships>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-left: 15px;
`;

const DisplayName = styled.h2`
  font-size: 20px;
`;

const Handle = styled.p`
  margin-top: 5px;
  font-weight: 200;
`;

const FollowingTag = styled.span`
  background-color: lightgrey;
  border-radius: 5px;
  font-size: 12px;
  padding: 2px 5px;
`;

const Bio = styled.p`
  margin: 15px 0px;
`;

const WhenAndWhere = styled.p`
  color: grey;
`;

const Location = styled.span``;

const Joined = styled.span`
  margin-left: 20px;
`;

const Relationships = styled.p`
  color: grey;
  margin: 15px 0px;

  & strong {
    color: black;
  }

  & span {
    margin-left: 10px;
  }
`;

export default ProfileInfos;
