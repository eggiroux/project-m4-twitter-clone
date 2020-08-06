import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { COLORS } from "../constants";
import logoSrc from "../assets/logo.svg";
import { FiHome, FiUser, FiBookmark, FiBell } from "react-icons/fi";

const Sidebar = () => {
  return (
    <Wrapper>
      <Logo src={logoSrc} alt="critter logo" />
      <NavList>
        <li>
          <NavigationItem activeClassName="active" to="/" exact={true}>
            <FiHome />
            <span>Home</span>
          </NavigationItem>
        </li>
        <li>
          <NavigationItem activeClassName="active" to="/me">
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

const Logo = styled.img`
  height: 40px;
  width: 40px;
  margin: 0 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  height: 100vh;
  margin: 0 30px 0 100px;
`;

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const NavigationItem = styled(NavLink)`
  display: inline-block;
  border-radius: 25px;
  height: 45px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  padding: 10px 20px 10px 15px;

  &:hover {
    background: ${COLORS.highlight};
    color: ${COLORS.primary};
  }

  &:hover span {
    color: ${COLORS.primary};
  }

  & span {
    padding-left: 20px;
  }

  &.active {
    color: ${COLORS.primary};
  }
`;

export default Sidebar;
