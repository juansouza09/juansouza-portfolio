import React from "react";
import styled from "styled-components";
import mobileImg from "../assets/mobile.png";
import webImg from "../assets/web.png";

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

const PortfolioItem = styled.div`
  position: relative;
  background-color: #333;
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  
  img {
    width: 100%;
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
  color: #333;
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

const PortfolioSection = () => {
  return (
    <PortfolioContainer>
      <Subtitle>
        <Line />
        <SubtitleText>MY WORKS</SubtitleText>
      </Subtitle>
      <TitleText>Featured Portfolios</TitleText>
      <PortfolioGrid>
        <PortfolioItem>
          <img src={mobileImg} alt="Agency Website" />
          <Overlay className="overlay">
            <ProjectTitle>Agency Website</ProjectTitle>
            <TechTags>
              <TechTag>WordPress</TechTag>
              <TechTag>↗</TechTag>
            </TechTags>
          </Overlay>
        </PortfolioItem>
        <PortfolioItem>
          <img src={webImg} alt="Dashboard Website" />
          <Overlay className="overlay">
            <ProjectTitle>Dashboard Website</ProjectTitle>
            <TechTags>
              <TechTag>React</TechTag>
              <TechTag>↗</TechTag>
            </TechTags>
          </Overlay>
        </PortfolioItem>
        <PortfolioItem>
          <img src={mobileImg} alt="Support Center Website" />
          <Overlay className="overlay">
            <ProjectTitle>Support Center Website</ProjectTitle>
            <TechTags>
              <TechTag>PHP</TechTag>
              <TechTag>↗</TechTag>
            </TechTags>
          </Overlay>
        </PortfolioItem>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
