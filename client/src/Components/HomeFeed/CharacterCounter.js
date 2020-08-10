import React from "react";
import styled from "styled-components";

const CharacterCounter = ({ characters }) => {
  let color = "lightgrey";

  if (280 - characters <= 0) {
    color = "crimson";
  } else if (280 - characters <= 55) {
    color = "gold";
  }
  return (
    <div style={{ color: color, padding: "20px 20px 25px" }}>
      {280 - characters}
    </div>
  );
};

export default CharacterCounter;
