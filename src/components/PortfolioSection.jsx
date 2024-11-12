import React from "react";
import styled from "styled-components";
import luaStationImg from "../assets/ls-image.jpg";
import morfImg from "../assets/morf-image.jpg";
import coffeeImg from "../assets/coffee-shop-image.PNG";
import { useTranslation } from "react-i18next";

const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 60px 20px;
  width: 100vw;
  padding-left: 10%;
  padding-right: 10%;
  color: #fff;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const PortfolioGrid = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  gap: 20px;
  width: 100%;
`;

const PortfolioItem = styled.a`
  position: relative;
  background-color: #333;
  border-radius: 10px;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;

  img {
    width: 100%;
    max-height: 500px; /* Defina uma altura padrão */
    object-fit: cover;
    border-radius: 10px 10px 0 0; /* Borda arredondada apenas no topo */
  }

  &:hover .overlay {
    transform: translateY(0);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 15px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
  transform: translateY(5%); /* Esconde a overlay inicialmente */
`;

const ProjectTitle = styled.p`
  font-size: 18px;
  color: #232e35;
  font-weight: 600;
  margin: 0;
`;

const TechTags = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const TechTag = styled.span`
  background-color: #e0e0e0;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
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

const DescriptionText = styled.span`
  font-size: 14px;
  color: #333;
  font-family: "Inter", sans-serif;
  font-weight: 500;
`;

const PortfolioSection = () => {
  const { t } = useTranslation();

  return (
    <PortfolioContainer>
      <Subtitle>
        <Line />
        <SubtitleText>{t("portfolio")}</SubtitleText>
      </Subtitle>
      <TitleText>{t("portfolio-subtitle")}</TitleText>
      <PortfolioGrid>
        <PortfolioItem href="https://play.google.com/store/apps/details?id=ai.teachnology.morf&hl=pt_BR&pli=1">
          <img src={morfImg} alt="Morf" />
          <Overlay className="overlay">
            <ProjectTitle>{t("project-1-title")}</ProjectTitle>
            <DescriptionText>{t("project-1-desc")}</DescriptionText>
            <TechTags>
              <TechTag>Flutter</TechTag>
              <TechTag>↗</TechTag>
            </TechTags>
          </Overlay>
        </PortfolioItem>
        <PortfolioItem href="https://github.com/juansouza09/LuaStation">
          <img src={luaStationImg} alt="Lua Station" />
          <Overlay className="overlay">
            <ProjectTitle>{t("project-2-title")}</ProjectTitle>
            <DescriptionText>{t("project-2-desc")}</DescriptionText>
            <TechTags>
              <TechTag>Android Kotlin</TechTag>
              <TechTag>↗</TechTag>
            </TechTags>
          </Overlay>
        </PortfolioItem>
        <PortfolioItem href="https://github.com/juansouza09/coffee-shop-flutter">
          <img src={coffeeImg} alt="Coffee Shop UI" />
          <Overlay className="overlay">
            <ProjectTitle>{t("project-3-title")}</ProjectTitle>
            <DescriptionText>{t("project-3-desc")}</DescriptionText>
            <TechTags>
              <TechTag>Flutter</TechTag>
              <TechTag>↗</TechTag>
            </TechTags>
          </Overlay>
        </PortfolioItem>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
