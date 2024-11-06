// src/components/HeroSection.jsx
import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 100px 20px; /* Ajusta para não cobrir o Header */
  width: 100%;
  height: 100vh;
  background-color: #222;
  color: #fff;
`;

const Name = styled.h1`
  font-size: 3em;
  color: #0f9bff;
`;

const Description = styled.p`
  max-width: 600px;
  font-size: 1.2em;
`;

const HeroSection = () => {
  return (
    <HeroContainer>
      <Name>Juan Souza</Name>
      <Description>
        Creative software engineer with more than 3 years of experience in ...
      </Description>
      <img src="path/to/profile-pic.jpg" alt="Juan Souza" style={{ width: '200px', borderRadius: '10px' }} />
    </HeroContainer>
  );
};

export default HeroSection;
