// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import Select from 'react-select';
import Flag from 'react-world-flags';
import { useTranslation } from 'react-i18next';
import resumeEN from '../assets/resume-en.pdf';
import resumePT from '../assets/resume-pt.pdf';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 20px; /* Ajuste o valor conforme necessário */
  padding-left: 8%; /* Ajuste o valor conforme necessário */
  padding-right: 8%; /* Ajuste o valor conforme necessário */
  box-sizing: border-box;
  height: auto;
  background-color: #1e1e1e;
  font-family: 'Inter', sans-serif;
  color: #fff;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: 2px;
  color: #fff;
  margin-left: 50px; /* Margem à esquerda do logo */
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 40px;

  a {
    color: #f1f1f1;
    font-size: 16px;
    text-decoration: none;
    transition: color 0.3s;
    font-family: 'Inter', sans-serif;

    /* Estilo para link ativo */
    font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
    color: ${({ isActive }) => (isActive ? '#F1F1F1' : '#F1F1F1')};

    &:hover {
      color: #7E74F1;
    }
  }

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 20px;
    background-color: #1e1e1e;
    padding: 20px;
    border-radius: 8px;
    gap: 15px;
  }
`;

const RightContent = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 50px; /* Margem à direita do conteúdo */

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 8px 18px;
  font-size: 16px;
  color: #fff;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #7E74F1;
    border-color: #7E74F1;
  }
`;

const Icon = styled.div`
  font-size: 20px;
  color: #fff;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #7E74F1;
  }
`;

const MobileMenuIcon = styled.div`
  display: none;
  font-size: 24px;
  cursor: pointer;
  margin: 50px;


  @media (max-width: 768px) {
    display: block;
  }
`;

const FlagSelect = styled(Select)`
  width: auto;
  font-size: 14px;
  .react-select__control {
    background-color: transparent;
    border-color: #fff;
    min-height: 40px;
    cursor: pointer;
    &:hover {
      border-color: #7E74F1;
    }
  }
  .react-select__single-value {
    color: #fff;
  }
  .react-select__menu {
    background-color: #1e1e1e;
    z-index: 1000;
  }
  .react-select__option {
    background-color: #1e1e1e;
    color: #7E74F1;
    cursor: pointer;
    &:hover {
      background-color: #7E74F1;
      color: #fff;
    }
  }
`;

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#services");
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);


  useEffect(() => {
    setSelectedLanguage(i18n.language); // Define a bandeira inicial ao carregar o site
  }, [i18n.language]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const languageOptions = [
    { value: "en", label: <Flag code="US" width="20" alt="English" /> },
    { value: "pt", label: <Flag code="BR" width="20" alt="Português" /> }
  ];

  const handleLanguageChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value); // Altera o idioma no i18n
    setSelectedLanguage(selectedOption.value); // Atualiza a bandeira selecionada
  };

  const resumeFile = i18n.language === 'pt' ? resumePT : resumeEN;

  return (
    <HeaderContainer>
      <Logo>J S</Logo>

      <NavLinks isOpen={menuOpen}>
        <a
          href="#services"
          onClick={() => handleLinkClick("#services")}
          style={{
            fontWeight: activeLink === "#services" ? "500" : "300",
          }}
        >
          {t('services')}
        </a>
        <a
          href="#portfolio"
          onClick={() => handleLinkClick("#portfolio")}
          style={{
            fontWeight: activeLink === "#portfolio" ? "500" : "300",
          }}
        >
          {t('portfolio')}
        </a>
        <a
          href="#experience"
          onClick={() => handleLinkClick("#experience")}
          style={{
            fontWeight: activeLink === "#experience" ? "500" : "300",
          }}
        >
          {t('experience')}
        </a>
        <a
          href="#skills"
          onClick={() => handleLinkClick("#skills")}
          style={{
            fontWeight: activeLink === "#skills" ? "500" : "300",
          }}
        >
          {t('skills')}
        </a>
      </NavLinks>

      <RightContent>
        <a href={resumeFile} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
          <Button>{t('resume')}</Button>
        </a>
        <FlagSelect
          options={languageOptions}
          value={languageOptions.find(option => option.value === selectedLanguage)}
          onChange={handleLanguageChange}
          isSearchable={false}
          classNamePrefix="react-select"
        />
      </RightContent>

      <MobileMenuIcon onClick={toggleMenu}>
        <HiOutlineMenuAlt3 />
      </MobileMenuIcon>
    </HeaderContainer>
  );
};

export default Header;
