import React from "react";
import styled from "styled-components";

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
  return (
    <Wrapper>
      {displayName}
      {handle}
      {bio}
      {location}
      {joined}
      {numFollowers}
      {numFollowing}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default ProfileInfos;
