import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../constants";
import { FiHome, FiUser, FiBookmark, FiBell } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo src="../assets/logo.svg" alt="critter logo" />
      <NavList>
        <li>
          <NavigationItem activeClassName="active" to="/">
            <FiHome />
            <span>Home</span>
          </NavigationItem>
        </li>
        <li>
          <NavigationItem activeClassName="active" to="/markyMark">
            <FiUser />
            <span>Profile</span>
          </NavigationItem>
        </li>
        <li>
          <NavigationItem activeClassName="active" to="/notifications">
            <FiBell />
            <span>Notifications</span>
          </NavigationItem>
        </li>
        <li>
          <NavigationItem activeClassName="active" to="/bookmarks">
            <FiBookmark />
            <span>Bookmarks</span>
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
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background: purple;
  }
`;

export default Sidebar;
