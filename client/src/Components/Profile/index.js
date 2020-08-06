import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Spinner from "../Spinner";
import Avatar from "../Avatar";
import ProfileInfos from "./ProfileInfos";

const Profile = ({}) => {
  const { profileId } = useParams();

  const [isProfileLoaded, setIsProfileLoaded] = React.useState(false);
  const [profile, setProfile] = React.useState(null);

  React.useEffect(() => {
    const fetchProfile = async () => {
      const response = await fetch(`/api/${profileId}/profile`);
      const profile = await response.json();
      setProfile(profile.profile);
    };
    if (!isProfileLoaded) {
      fetchProfile();
      setIsProfileLoaded(true);
    }
  });

  return (
    <Wrapper>
      {profile ? (
        <>
          <Banner style={{ backgroundImage: `url(${profile.bannerSrc})` }} />{" "}
          <Avatar
            avatarSrc={profile.avatarSrc}
            size="150px"
            margin="-75px 0 0 15px"
            border="2px white solid"
          />
          <ProfileInfos
            handle={profile.handle}
            displayName={profile.displayName}
            bio={profile.bio}
            isFollowingYou={profile.isFollowingYou}
            location={profile.location}
            joined={profile.joined}
            numFollowers={profile.numFollowers}
            numFollowing={profile.numFollowing}
          />
        </>
      ) : (
        <Spinner size="50px" />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 750px;
  border: 1px lightgrey solid;
  border-top: none;
  position: relative;
`;

const Banner = styled.div`
  height: 250px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

export default Profile;
