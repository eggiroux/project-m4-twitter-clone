import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../constants";
import { FiHome } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo src="../assets/logo.svg" alt="critter logo" />
      <NavList>
        <li>
          <NavigationItem activeClassName="active" to="/">
            <svg viewBox="0 0 24 24" width="25px" height="25px">
              <path d={FiHome} fill={COLORS.primary} />
            </svg>
            <p>Home</p>
          </NavigationItem>
        </li>
        <li>
          <NavigationItem
            activeClassName="active"
            to="/markyMark"
            icon={FiHome}
            alt="bookmark icon"
          >
            Profile
          </NavigationItem>
        </li>
        <li>
          <NavigationItem
            activeClassName="active"
            to="/notifications"
            icon={FiHome}
            alt="bookmark icon"
          >
            Notifications
          </NavigationItem>
        </li>
        <li>
          <NavigationItem
            activeClassName="active"
            to="/bookmarks"
            icon={FiHome}
            alt="bookmark icon"
          >
            Bookmarks
          </NavigationItem>
        </li>
      </NavList>
    </Wrapper>
  );
};

const Logo = styled.img``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100vh;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

const NavigationItem = styled(NavLink)`
  border-radius: 15px;
  height: 25px;
  text-decoration: none;

  &:hover {
    background: purple;
  }
`;

export default Sidebar;
