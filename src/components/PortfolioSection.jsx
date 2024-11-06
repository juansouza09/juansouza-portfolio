// src/components/PortfolioSection.jsx
import React from 'react';
import styled from 'styled-components';

const PortfolioContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 60px 20px;
  width: 100%;
  background-color: #222;
  color: #fff;
`;

const PortfolioGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1200px;
`;

const PortfolioItem = styled.div`
  flex: 1 1 30%;
  min-width: 280px;
  background-color: #333;
  border-radius: 10px;
  padding: 20px;
  color: #fff;

  img {
    width: 100%;
    border-radius: 10px;
  }
`;

const PortfolioSection = () => {
  return (
    <PortfolioContainer>
      <h2>Featured Portfolios</h2>
      <PortfolioGrid>
        <PortfolioItem>
          <img src="path/to/project1.jpg" alt="Project 1" />
          <p>Agency Website</p>
        </PortfolioItem>
        <PortfolioItem>
          <img src="path/to/project2.jpg" alt="Project 2" />
          <p>Dashboard Website</p>
        </PortfolioItem>
        <PortfolioItem>
          <img src="path/to/project3.jpg" alt="Project 3" />
          <p>Support Center Website</p>
        </PortfolioItem>
      </PortfolioGrid>
    </PortfolioContainer>
  );
};

export default PortfolioSection;
