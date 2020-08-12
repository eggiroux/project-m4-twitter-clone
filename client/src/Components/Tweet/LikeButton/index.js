import React from "react";
import styled from "styled-components";

import Heart from "./Heart";
import PoppingCircle from "./PoppingCircle";
import ScaleIn from "./ScaleIn";

import { range, sample, random } from "../../../utils";

import { TweetContext } from "../TweetContext";
import ConfettiPiece from "./ConfettiPiece";

const PARTICLE_COLORS = ["#e53935", "#1e88e5", "#43a047", "#fdd835", "#fb8c00"];

const LikeButton = ({ size = 25 }) => {
  const heartSize = size * 0.6;
  const { isLikedByCurrentUser } = React.useContext(TweetContext);

  //console.log("rendering like button", isLikedByCurrentUser);

  return (
    <Wrapper style={{ width: size, height: size }}>
      {isLikedByCurrentUser && <PoppingCircle size={size} color="#E790F7" />}
      {isLikedByCurrentUser &&
        range(12).map((i) => (
          <ConfettiPiece
            key={i}
            angle={360 * (i / 12)}
            distanceMin={random(0, 5)}
            distanceMax={random(12, 22)}
            color={sample(PARTICLE_COLORS)}
          />
        ))}
      {isLikedByCurrentUser ? (
        <ScaleIn>
          <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
        </ScaleIn>
      ) : (
        <Heart width={heartSize} isToggled={isLikedByCurrentUser} />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LikeButton;
