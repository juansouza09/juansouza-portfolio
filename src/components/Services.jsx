import React from "react";
import styled from "styled-components";
import mobileImg from "../assets/mobile.png";
import webImg from "../assets/web.png";
import { useTranslation } from "react-i18next";
import { media } from "../styles/media";

const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100vw;
  color: #fff;
  padding: 6rem 0;
  overflow-x: hidden;
  box-sizing: border-box;
  ${media.mobile`
  `}
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  gap: 40px;
  width: 40%;

  ${media.mobile`
  width: 90%;
  `}
`;

const ServiceItem = styled.div`
  flex: 1 1 35%;
  background-color: #333;
  border-radius: 20px;
  padding: 20px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05); /* Efeito de zoom ao passar o mouse */
  }

  h3 {
    color: #ffffff;
    font-size: 18px;
    font-weight: bold;
    margin-top: 10px;
  }

  p {
    color: #d9d9d9;
    font-size: 14px;
    text-align: center;
  }
`;

const ServiceImage = styled.img`
  width: 80%; /* Ajuste o tamanho conforme necessário */
  height: 60%;
  border-radius: 10px;
  margin-bottom: 15px; /* Espaço abaixo da imagem */
  object-fit: cover; /* Ajuste a imagem para caber no espaço sem cortar */
  object-position: center;
`;

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
`;

const Line = styled.span`
  width: 15px;
  height: 1px;
  background-color: #d9d9d9;
`;

const SubtitleText = styled.span`
  font-size: 14px;
  letter-spacing: 4px;
  color: #656d72;
  font-family: "Inter", sans-serif;
  font-weight: 500;
`;

const TitleText = styled.span`
  font-size: 26px;
  color: #ffffff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 800;
`;

const Services = () => {
  const { t } = useTranslation();

  return (
    <ServicesContainer>
      <Subtitle>
        <Line />
        <SubtitleText>{t("services")}</SubtitleText>
      </Subtitle>
      <TitleText>{t("services-subtitle")}</TitleText>
      <ServicesGrid>
        <ServiceItem>
          <ServiceImage src={mobileImg} alt="Mobile Apps Icon" />
          <h3>{t("service-1-title")}</h3>
          <p>{t("service-1-desc")}</p>
        </ServiceItem>
        <ServiceItem>
          <ServiceImage src={webImg} alt="Web Backend & Frontend Icon" />
          <h3>{t("service-2-title")}</h3>
          <p>{t("service-2-desc")}</p>
        </ServiceItem>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
