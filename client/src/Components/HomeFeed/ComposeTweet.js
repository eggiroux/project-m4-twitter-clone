import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

import Avatar from "../Avatar";
import TextInput from "./TextInput";
import Button from "../Button";
import CharacterCounter from "./CharacterCounter";

const ComposeTweet = () => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [characters, setCharacters] = React.useState(0);
  const [disableSubmit, setDisableSubmit] = React.useState(false);

  React.useEffect(() => {
    if (280 - characters <= 0) {
      setDisableSubmit(true);
      console.log("disabling submit", disableSubmit);
    }
  }, [characters]);

  return (
    <Wrapper>
      <Avatar size="50px" avatarSrc={currentUser.avatarSrc} margin="10px" />
      <form style={{ width: "100%" }}>
        <TextInput setCharacters={setCharacters} />
        <ButtonArea>
          <CharacterCounter characters={characters} />
          <Button disabled={disableSubmit}>Meow</Button>
        </ButtonArea>
      </form>
      <Divider />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid grey;
  position: relative;
`;

const Divider = styled.div`
  width: 100%;
  height: 15px;
  background-color: lightgrey;
  bottom: -15px;
  position: absolute;
`;

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 20px;
`;

export default ComposeTweet;
