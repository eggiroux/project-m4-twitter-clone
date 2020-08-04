import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import GlobalStyles from "./GlobalStyles";

import HomeFeed from "./Components/HomeFeed";
import Notifications from "./Components/Notifications";
import Bookmarks from "./Components/Bookmarks";
import TweetDetails from "./Components/TweetDetails";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Main>
          <Sidebar></Sidebar>
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
        </Main>
      </Router>
    </>
  );
};

const Main = styled.main`
  padding-top: 32px;
  padding-bottom: 32px;
  display: flex;
`;

export default App;
