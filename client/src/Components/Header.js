import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FiArrowLeft, FiAward } from "react-icons/fi";

const Header = ({ back, children }) => {
  return (
    <Wrapper>
      {back && <FiArrowLeft style={{ marginLeft: "15px" }} />}
      <Title>{children}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 50px;
  border-bottom: 1px lightgrey solid;
`;

const Title = styled.span`
  padding: 10px;
  font-size: 24px;
  font-weight: 800;
  margin-left: 5px;
`;

export default Header;
