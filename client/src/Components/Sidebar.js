import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

import { COLORS } from "../constants";
import logoSrc from "../assets/logo.svg";
import { FiHome, FiUser, FiBookmark, FiBell, FiFeather } from "react-icons/fi";
import ComposeModal from "./ComposeModal";

const Sidebar = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const { setIsLoadingDone } = React.useContext(CurrentUserContext);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const closeModalAfterTweet = () => {
    setModalOpen(false);
    setIsLoadingDone(false);
  };

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
      <ButtonLong onClick={openModal}>Meow</ButtonLong>
      <ButtonSmall onClick={openModal}>
        <FiFeather />
      </ButtonSmall>
      <ComposeModal
        modalOpen={modalOpen}
        closeModal={closeModal}
        closeModalAfterTweet={closeModalAfterTweet}
      ></ComposeModal>
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
  @media (max-width: 1100px) {
    margin-left: 30px;
  }
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

  @media (max-width: 1100px) {
    padding: 10px 15px 10px 15px;
  }

  &:hover {
    background: ${COLORS.highlight};
    color: ${COLORS.primary};
  }

  &:hover span {
    color: ${COLORS.primary};
  }

  & span {
    padding-left: 20px;
    @media (max-width: 1100px) {
      display: none;
    }
  }

  &.active {
    color: ${COLORS.primary};
  }
`;

const ButtonLong = styled.button`
  border-radius: 25px;
  color: white;
  font-size: 20px;
  outline: none;
  border: none;
  background-color: ${COLORS.primary};
  padding: 10px 20px;
  margin-bottom: 10px;
  @media (max-width: 1100px) {
    display: none;
  }
`;

const ButtonSmall = styled.button`
  display: none;
  @media (max-width: 1100px) {
    display: inline-block;
    border-radius: 50%;
    padding-top: 5px;
    color: white;
    font-size: 20px;
    outline: none;
    border: none;
    background-color: ${COLORS.primary};
    margin-bottom: 10px;
    height: 45px;
    width: 45px;
    margin: 0 auto;
  }
`;

export default Sidebar;
