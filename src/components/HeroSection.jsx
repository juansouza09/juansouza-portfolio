// src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 85vh;
  background-color: #1E1E1E;
  color: #fff;
  padding-left: 10%; /* Ajuste o valor conforme necessário */
  padding-right: 10%; /* Ajuste o valor conforme necessário */
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const TextContainer = styled.div`
  max-width: 500px;
  margin-right: 20px;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* Espaçamento entre o traço e o texto */
  margin-bottom: 10px;
`;

const Line = styled.span`
  width: 15px; /* Largura do traço */
  height: 1px;
  background-color: #D9D9D9;
`;

const SubtitleText = styled.span`
  font-size: 14px;
  letter-spacing: 4px;
  color: #656D72;
  font-family: 'Inter', sans-serif;
  font-weight: 500; /* Inter Medium */
`;

const Name = styled.h1`
  font-size: 48px;
  color: #fff;
  margin: 0;
  font-weight: 700;
  display: flex;
  gap: 8px;
  font-family: 'Plus Jakarta Sans', sans-serif;
`;

const HighlightedName = styled.span`
  color: #7E74F1;
`;

const Description = styled.p`
  font-size: 18px;
  color: #d3d3d3;
  line-height: 1.6;
  margin: 20px 0;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;

  a {
    color: #fff;
    font-size: 24px;
    transition: color 0.3s;

    &:hover {
      color: #7E74F1;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 340px;
  height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 340px;
  height: 420px;
  background-color: #7E74F1;
  transform: rotate(-10deg);
  border-radius: 20px;
`;

const ProfileImage = styled.img`
  position: relative;
  width: 320px;
  height: 420px;
  border-radius: 20px;
  z-index: 1;
`;

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <TextContainer>
        <Subtitle>
          <Line />
          <SubtitleText>{t('myNameIs')}</SubtitleText>
        </Subtitle>
        <Name>
          Juan <HighlightedName>Souza.</HighlightedName>
        </Name>
        <Description>
          {t('description')}
        </Description>
        <SocialMedia>
          <a href="https://github.com/juansouza09" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/juansouza9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/iamjuansouzaa/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </SocialMedia>
      </TextContainer>
      <ImageContainer>
        <BackgroundShape />
        <ProfileImage src="/src/assets/juan-image.jpeg" alt="Juan Souza" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
