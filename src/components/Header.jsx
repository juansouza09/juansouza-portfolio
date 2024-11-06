// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: #1a1a1a;
  position: fixed; /* Fixa o header no topo */
  top: 0;
  z-index: 100;
`;

const NavLinks = styled.nav`
  a {
    color: #fff;
    margin: 0 15px;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      color: #0f9bff;
    }
  }
`;

const SocialIcons = styled.div`
  a {
    color: #fff;
    margin: 0px;
    font-size: 20px;

    &:hover {
      color: #0f9bff;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>J S</h1>
      <NavLinks>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#experience">Experience</a>
        <a href="#skills">Skills</a>
      </NavLinks>
      <SocialIcons>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </SocialIcons>
    </HeaderContainer>
  );
};

export default Header;
