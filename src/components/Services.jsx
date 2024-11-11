import React from 'react';
import styled from 'styled-components';
import mobileImg from '../assets/mobile.png'
import webImg from '../assets/web.png'

const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100vw;
  color: #fff;
  padding: 10px;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 30px;
  gap: 40px;
  width: 40%; /* Ajuste de largura para dar mais espaço */
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
    color: #D9D9D9;
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
  background-color: #D9D9D9;
`;

const SubtitleText = styled.span`
  font-size: 14px;
  letter-spacing: 4px;
  color: #656D72;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
`;

const Services = () => {
  return (
    <ServicesContainer>
      <Subtitle>
        <Line />
        <SubtitleText>SERVICES</SubtitleText>
      </Subtitle>
      <h2>Specialized in</h2>
      <ServicesGrid>
        <ServiceItem>
          <ServiceImage src={mobileImg} alt="Mobile Apps Icon" />
          <h3>Mobile Apps</h3>
          <p>Building Android and iOS apps with an attractive design and agile performance. From development to publication in the stores.</p>
        </ServiceItem>
        <ServiceItem>
          <ServiceImage src={webImg} alt="Web Backend & Frontend Icon" />
          <h3>Web Backend & Frontend</h3>
          <p>Building modern web systems with secure backends and dynamic interfaces, guaranteeing performance and scalability.</p>
        </ServiceItem>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
