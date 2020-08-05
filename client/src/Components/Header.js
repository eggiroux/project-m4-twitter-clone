import React from "react";
import styled from "styled-components";

const Header = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 50px;
  border-bottom: 1px lightgrey solid;
`;

const Title = styled.h2`
  padding: 10px;
`;

export default Header;
