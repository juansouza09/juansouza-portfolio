// src/components/Services.jsx
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
  width: 100%;
  background-color: #1a1a1a;
  color: #fff;
`;

const ServicesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const ServiceItem = styled.div`
  flex: 1 1 45%;
  min-width: 280px;
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  color: #fff;

  h3 {
    color: #7E74F1;
  }
`;

const Services = () => {
  return (
    <ServicesContainer>
      <h2>Specialized in</h2>
      <ServicesGrid>
        <ServiceItem>
          <h3>Mobile Apps</h3>
          <p>Building Android and iOS apps with modern designs...</p>
        </ServiceItem>
        <ServiceItem>
          <h3>Web Backend & Frontend</h3>
          <p>Building scalable web systems with secure backend...</p>
        </ServiceItem>
      </ServicesGrid>
    </ServicesContainer>
  );
};

export default Services;
