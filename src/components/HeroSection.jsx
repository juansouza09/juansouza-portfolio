import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import image from "../assets/juan-image.jpeg";
import { media } from "../styles/media";

const HeroContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 85vh;
  background-color: #121212;
  color: #fff;
  padding: 0 10%;
  font-family: "Inter", sans-serif;
  overflow-x: hidden;
  box-sizing: border-box;

  ${media.tablet`
    flex-direction: column;
    padding: 0 5%;
    justify-content: space-around;
  `}

  ${media.mobile`
    flex-direction: column;
    justify-content: space-around;
    padding: 0 5%;
    height: 100vh;
  `}
`;

const TextContainer = styled.div`
  max-width: 500px;
  margin-right: 20px;

  ${media.mobile`
    margin: 10px 0px;
  `}
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
  background-color: #d9d9d9;
`;

const SubtitleText = styled.span`
  font-size: 14px;
  letter-spacing: 4px;
  color: #656d72;
  font-family: "Inter", sans-serif;
  font-weight: 500; /* Inter Medium */
`;

const Name = styled.h1`
  font-size: 48px;
  color: #fff;
  margin: 0;
  font-weight: 700;
  display: flex;
  gap: 8px;
  font-family: "Plus Jakarta Sans", sans-serif;
`;

const HighlightedName = styled.span`
  color: #7e74f1;
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
      color: #7e74f1;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 40px;

  ${media.tablet`
    margin-left: 0;
    margin-top: 20px;
  `}

  ${media.mobile`
    margin-left: 0;
    margin-top: 20px;
  `}
`;

const BackgroundShape = styled.div`
  position: absolute;
  width: 340px;
  height: 420px;
  background-color: #7e74f1;
  transform: rotate(-10deg);
  border-radius: 20px;

  ${media.tablet`
    width: 18rem;
    height: 24rem;
  `}

  ${media.mobile`
    width: 16rem;
    height: 22rem;
  `}
`;

const ProfileImage = styled.img`
  position: relative;
  width: 320px;
  height: 420px;
  border-radius: 20px;
  z-index: 1;
  object-fit: cover;

  ${media.tablet`
    width: 18rem;
    height: 24rem;
  `}

  ${media.mobile`
    width: 16rem;
    height: 22rem;
  `}
`;

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <HeroContainer>
      <TextContainer>
        <Subtitle>
          <Line />
          <SubtitleText>{t("myNameIs")}</SubtitleText>
        </Subtitle>
        <Name>
          Juan <HighlightedName>Souza.</HighlightedName>
        </Name>
        <Description>{t("description")}</Description>
        <SocialMedia>
          <a
            href="https://github.com/juansouza09"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/juansouza9/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </SocialMedia>
      </TextContainer>
      <ImageContainer>
        <BackgroundShape />
        <ProfileImage src={image} alt="Juan Souza" />
      </ImageContainer>
    </HeroContainer>
  );
};

export default HeroSection;
