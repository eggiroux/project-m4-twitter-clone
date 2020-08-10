import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";
import { CurrentUserContext } from "./Components/CurrentUserContext";

import HomeFeed from "./Components/HomeFeed";
import Notifications from "./Components/Notifications";
import Bookmarks from "./Components/Bookmarks";
import TweetDetails from "./Components/TweetDetails";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";
import Spinner from "./Components/Spinner";

const App = () => {
  const { isLoadingDone } = React.useContext(CurrentUserContext);
  document.title = "Critter";
  return (
    <>
      <GlobalStyles />
      <Router>
        <Main>
          <Sidebar></Sidebar>
          <PageBody>
            {isLoadingDone ? (
              <Switch>
                <Route exact path="/">
                  <HomeFeed />
                </Route>
                <Route path="/notifications">
                  <Notifications />
                </Route>
                <Route path="/bookmarks">
                  <Bookmarks />
                </Route>
                <Route path="/tweet/:tweetId">
                  <TweetDetails />
                </Route>
                <Route path="/:profileId">
                  <Profile />
                </Route>
              </Switch>
            ) : (
              <Spinner size="50px" />
            )}
          </PageBody>
        </Main>
      </Router>
    </>
  );
};

const Main = styled.main`
  display: flex;
  overflow: hidden;
`;

const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 750px;
  border: 1px lightgrey solid;
  border-top: none;
  position: relative;
`;

export default App;
