import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import FeedSelector from "./FeedSelector";

import Spinner from "../Spinner";
import Avatar from "../Avatar";
import ProfileInfos from "./ProfileInfos";
import Feed from "../Feed";
import Error from "../Error";

const Profile = () => {
  const { profileId } = useParams();
  const [isProfileLoaded, setIsProfileLoaded] = React.useState(false);
  const [profile, setProfile] = React.useState(null);
  const [isFeedLoaded, setIsFeedLoaded] = React.useState(false);
  const [profileError, setProfileError] = React.useState(false);
  const [selectedFeed, setSelectedFeed] = React.useState(1);

  window.scrollTo(0, 0);

  React.useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/api/${profileId}/profile`);
        const profile = await response.json();
        setProfile(profile.profile);
      } catch (err) {
        console.log("error caught");
        setProfileError(true);
      }
    };
    if (!isProfileLoaded) {
      fetchProfile();
      setIsProfileLoaded(true);
    }
  }, []);
  if (profile) {
    document.title = `Critter - ${profile.displayName}`;
  } else {
    document.title = `Critter - Profile Page`;
  }
  return (
    <Wrapper>
      {profileError ? (
        <Error />
      ) : profile ? (
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
          <FeedSwitch>
            <FeedSelector isSelected={selectedFeed === 1} setSelectedFeed>
              Tweets
            </FeedSelector>
            <FeedSelector isSelected={selectedFeed === 2}>Media</FeedSelector>
            <FeedSelector isSelected={selectedFeed === 3}>Likes</FeedSelector>
          </FeedSwitch>
          <Feed
            feedUrl={`api/${profile.handle}/feed`}
            isFeedLoaded={isFeedLoaded}
            setIsFeedLoaded={setIsFeedLoaded}
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

const FeedSwitch = styled.div`
  display: flex;
`;

export default Profile;
