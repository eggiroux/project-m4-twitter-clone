import React from "react";
import styled from "styled-components";
import Modal from "react-modal";

import ComposeTweet from "./HomeFeed/ComposeTweet";

const ComposeModal = ({ modalOpen, closeModal, closeModalAfterTweet }) => {
  React.useEffect(() => {
    Modal.setAppElement("body");
  }, []);
  return (
    <Wrapper isOpen={modalOpen} onRequestClose={closeModal}>
      <ComposeTweet onSubmit={closeModalAfterTweet} />
    </Wrapper>
  );
};

const Wrapper = styled(Modal)`
  margin-top: 200px;
  background-color: white;
  width: 60%;
  margin: 0 auto;
  border: 1px black solid;
  border-radius: 5px;
  &overlay {
    z-index: 10;
  }
`;

export default ComposeModal;
