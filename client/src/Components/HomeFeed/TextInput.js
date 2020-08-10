import React from "react";
import styled from "styled-components";

const TextInput = ({ setCharacters, setStatus, isFeedLoaded }) => {
  const [input, setInput] = React.useState("");
  React.useEffect(() => {
    if (!isFeedLoaded) {
      setInput("");
    }
  }, [isFeedLoaded]);

  return (
    <Wrapper
      placeholder="What's Meowing?"
      value={input}
      onChange={(ev) => {
        setInput(ev.target.value);
        setCharacters(ev.target.value.length);
        setStatus(ev.target.value);
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

  &:focus::placeholder {
    opacity: 0.5;
  }
`;

export default TextInput;
