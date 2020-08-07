import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "../CurrentUserContext";

import Avatar from "../Avatar";
import TextInput from "./TextInput";
import Button from "../Button";

const ComposeTweet = () => {
  const { currentUser } = React.useContext(CurrentUserContext);

  return (
    <Wrapper>
      <Avatar size="50px" avatarSrc={currentUser.avatarSrc} margin="10px" />
      <form style={{ width: "100%" }}>
        <TextInput />
        <Button>Meow</Button>
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
export default ComposeTweet;
