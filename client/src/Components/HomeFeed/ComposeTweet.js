import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

import Avatar from "../Avatar";
import TextInput from "./TextInput";
import Button from "../Button";
import CharacterCounter from "./CharacterCounter";

const ComposeTweet = ({ isFeedLoaded, setIsFeedLoaded }) => {
  const { currentUser } = React.useContext(CurrentUserContext);
  const [characters, setCharacters] = React.useState(0);
  const [disableSubmit, setDisableSubmit] = React.useState(false);
  const [status, setStatus] = React.useState("");

  React.useEffect(() => {
    if (280 - characters <= 0) {
      setDisableSubmit(true);
      //console.log("disabling submit", disableSubmit);
    }
  }, [characters]);

  const postTweet = async (ev) => {
    ev.preventDefault();
    console.log(status);
    try {
      const response = await fetch("/api/tweet", {
        method: "POST",
        body: JSON.stringify({
          status: status,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const tweetData = await response.json();
      console.log(tweetData);
      setIsFeedLoaded(false);
      console.log("just setIsFeedLoaded from postTweet");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <Avatar size="50px" avatarSrc={currentUser.avatarSrc} margin="10px" />
      <form style={{ width: "100%" }}>
        <TextInput
          setCharacters={setCharacters}
          setStatus={setStatus}
          isFeedLoaded={isFeedLoaded}
        />
        <ButtonArea>
          <CharacterCounter characters={characters} />
          <Button disabled={disableSubmit} onClick={postTweet}>
            Meow
          </Button>
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
