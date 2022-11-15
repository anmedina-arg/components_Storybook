import styled from 'styled-components';
import React from 'react';

/* eslint-disable-next-line */
const StyledBody = styled.div`
  display: grid;
  place-items: center;
  background: rgb(6, 6, 77);
  height: 100vh;
`;

const StyledSimpleCircleSpiner = styled.div`
  height: 50px;
  width: 50px;
  border: 5px solid #a8a8a8;
  border-top: 5px solid white;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
  @keyframes spin {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Loader = () => {
  return (
    <StyledBody>
      <StyledSimpleCircleSpiner />
    </StyledBody>
  );
};
