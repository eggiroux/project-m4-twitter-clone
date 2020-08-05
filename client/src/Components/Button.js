import React from "react";
import styled from "styled-components";

import { COLORS } from "../constants";

const Button = ({ onClick, children }) => {
  return <Wrapper>{children}</Wrapper>;
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
`;

export default Button;
