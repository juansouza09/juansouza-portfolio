// src/components/Row.jsx
import React from 'react';
import styled from 'styled-components';

const RowContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0px; /* Margem interna para os itens */
  border-radius: 8px; /* Bordas arredondadas para um estilo mais suave */
`;

const Row = ({ children }) => {
  return <RowContainer>{children}</RowContainer>;
};

export default Row;
