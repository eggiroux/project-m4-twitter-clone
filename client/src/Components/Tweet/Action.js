import React from "react";
import styled from "styled-components";

const Action = ({ color, onClick, toggleAction, children }) => {
  return (
    <Wrapper color={color} onClick={onClick}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  height: 35px;
  width: 35px;
  background: none;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background-color: ${(p) => p.color};
    opacity: 0;
  }

  &:hover:after {
    opacity: 0.2;
  }
`;

export default Action;
