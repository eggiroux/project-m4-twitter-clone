import React from "react";
import styled from "styled-components";

const TextInput = () => {
  return <Wrapper placeholder="What's Meowing?"></Wrapper>;
};

const Wrapper = styled.textarea`
  width: 75%;
  height: 200px;
  line-height: 35px;
  font-size: 20px;
  resize: none;
  outline: none;
  border: none;
  margin: 10px;
`;

export default TextInput;
