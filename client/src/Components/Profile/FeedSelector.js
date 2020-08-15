import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const FeedSelector = ({ children, isSelected }) => {
  return (
    <Wrapper className={!isSelected ? "inactive" : false}>{children}</Wrapper>
  );
};

const Wrapper = styled.button`
  flex: 1;
  padding: 15px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 16px;
  background-color: white;
  border: none;
  border-bottom: 2px solid ${COLORS.primary};
  color: ${COLORS.primary};

  &.inactive {
    color: grey;
    border-bottom: 1px lightgrey solid;
  }
`;

export default FeedSelector;
