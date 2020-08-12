import React from "react";
import styled from "styled-components";
import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from "react-router-dom";

import { clickOnSelectedLink } from "../handlers";
import useKeydown from "../Hooks/use-keydown.hook";

const Header = ({ back, children }) => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useKeydown("Enter", clickOnSelectedLink);

  return (
    <Wrapper>
      {back && (
        <span
          tabIndex="0"
          style={{ marginLeft: "15px" }}
          onClick={goBack}
          aria-label="go back"
        >
          <FiArrowLeft />
        </span>
      )}
      <Title>{children}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 50px;
  border-bottom: 1px lightgrey solid;
`;

const Title = styled.span`
  padding: 10px;
  font-size: 24px;
  font-weight: 800;
  margin-left: 5px;
`;

export default Header;
