// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
`;

const SocialIcons = styled.div`
  margin: 10px 0;

  a {
    color: #fff;
    margin: 0 10px;
    font-size: 20px;

    &:hover {
      color: #0f9bff;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Juan Souza</p>
      <SocialIcons>
        <a href="https://github.com"><FaGithub /></a>
        <a href="https://linkedin.com"><FaLinkedin /></a>
      </SocialIcons>
    </FooterContainer>
  );
};

export default Footer;
