import React from "react";
import Particle from "./Particle";
import styled from "styled-components";

const ConfettiPiece = ({ angle, distanceMin, distanceMax, color }) => {
  return (
    <CenteredWithinParent>
      <Particle
        distanceMin={distanceMin}
        distanceMax={distanceMax}
        angle={angle}
      >
        <Dot style={{ backgroundColor: color }} />
      </Particle>
    </CenteredWithinParent>
  );
};

const Dot = styled.div`
  border-radius: 50%;
  height: 10px;
  width: 10px;
`;

const CenteredWithinParent = styled.div`
  position: absolute;
`;

export default ConfettiPiece;
