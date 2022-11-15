import styled from 'styled-components';
import React from 'react';

/* eslint-disable-next-line */

const StyledRingLoader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: transparent;
  border: 3px solid #3c3c3c;
  border-radius: 50%;
  color: #fff000;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-shadow: 0 0 10px #fff000;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  &:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: -3px;
    width: 103%;
    height: 103%;
    border: 3px solid transparent;
    border-top: 3px solid #fff000;
    border-right: 3px solid #fff000;
    border-radius: 50%;
    animation: animateC 4s linear infinite;
  }

  h3 {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 5px;
    font-size: 1.1rem;
  }
  span {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    left: 50%;
    width: 50%;
    height: 4px;
    background-color: transparent;
    transform-origin: left;
    animation: animate 4s linear infinite;
  }

  span::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    top: -6px;
    right: -9px;
    background-color: #fff000;
    box-shadow: 0 0 20px #fff000;
  }

  @keyframes animateC {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes animate {
    0% {
      transform: rotate(45deg);
    }
    100% {
      transform: rotate(405deg);
    }
  }
`;

export const RingLoader = () => {
  return (
    <StyledRingLoader>
      <h3>Loading...</h3>
      <span />
    </StyledRingLoader>
  );
};
