import React from "react";
import styled from "styled-components";

const TextInput = ({ setCharacters }) => {
  return (
    <Wrapper
      placeholder="What's Meowing?"
      onChange={(ev) => {
        setCharacters(ev.target.value.length);
      }}
    ></Wrapper>
  );
};

const Wrapper = styled.textarea`
  height: 200px;
  line-height: 35px;
  width: 75%;
  font-size: 20px;
  resize: none;
  outline: none;
  border: none;
  margin: 10px;
`;

export default TextInput;
