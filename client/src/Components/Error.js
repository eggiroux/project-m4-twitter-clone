import React from "react";
import styled from "styled-components";

import { FiCloudRain } from "react-icons/fi";

const Error = () => {
  return (
    <Wrapper>
      <FiCloudRain />

      <h2>An Unknown error has occured.</h2>
      <p>
        Please try refreshing the page, or <a href="#">contact support</a> if
        the problem persists.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 60%;
`;

export default Error;
