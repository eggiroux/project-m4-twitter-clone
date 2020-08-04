import React from "react";
import styled from "styled-components";

import { CurrentUserContext } from "./CurrentUserContext";

const HomeFeed = () => {
  const { currentUser, isLoadingDone } = React.useContext(CurrentUserContext);

  return (
    <div>
      <h1>Home Feed</h1>
      {!isLoadingDone ? <p>loading</p> : <p>{currentUser.handle}</p>}
    </div>
  );
};

export default HomeFeed;
