import React from "react";
import styled from "styled-components";

import { FiCloudRain } from "react-icons/fi";

const Error = () => {
  return (
    <Wrapper>
      <div style={{ marginBottom: "30px" }}>
        <FiCloudRain size="100px" />
      </div>
      <ErrorText>
        <Header>An unknown error has occured.</Header>
        <ErrorBody>
          Please try refreshing the page, or <a href="#">contact support</a> if
          the problem persists.
        </ErrorBody>
      </ErrorText>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: 40px;
`;

const ErrorText = styled.div`
  max-width: 70%;
  margin: 0 auto;
`;
const Header = styled.h2`
  margin-bottom: 30px;
`;

const ErrorBody = styled.p`
  margin-bottom: 30px;
`;

export default Error;
