import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";

const Button = ({ disabled, onClick, children }) => {
  return (
    <Wrapper disabled={disabled} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 25px;
  color: white;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: ${COLORS.primary};
  padding: 10px 20px;
  margin-bottom: 10px;
  &:disabled {
    opacity: 0.5;
    color: lightgrey;
  }
`;

export default Button;
