import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { CountingEmoji } from './countingEmoji';

/* eslint-disable-next-line */

const StyledCounter = styled.div`
  color: red;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  box-sizing: border-box;
  font-size: 200px;
  user-select: none;

  .ghostNumber {
    font-size: 100px;
    padding-left: 4px;
    color: gray;
    animation: casper 1s linear forwards;
  }
  @keyframes casper {
    0% {
      transform: translateY(-20px);
      opacity: 0;
    }
    25% {
      transform: translateY(-35px);
      opacity: 0.5;
    }
    50% {
      transform: translateY(-55px);
      opacity: 1;
    }
    100% {
      transform: translateY(-60px);
      opacity: 0;
    }
  }
`;

type GhostNumberProps = {
  counter: number;
  max: number;
  operation: string;
};
const GhostNumber = ({ counter, max, operation }: GhostNumberProps) => {
  let ghostNumber = '';

  if (operation && counter === 0) {
    ghostNumber = 'MIN';
  } else if (counter === max) {
    ghostNumber = 'MAX';
  } else if (operation === 'increment') {
    ghostNumber = '+1';
  } else if (operation === 'decrement') {
    ghostNumber = '-1';
  }
  return (
    <div key={counter} className="ghostNumber">
      {ghostNumber}
    </div>
  );
};

export const Counter = ({ icon }: { icon?: JSX.Element }) => {
  const MAX = 10;
  const [counter, setCounter] = useState(0);
  const [operation, setOperation] = useState('');

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current === null) return; //type narrowing
    /*the following line must be not comented to use the component into a page*/
    //ref.current.style.opacity = '0';
    const handleScroll = () => {
      if (ref.current === null) return;
      console.log('window.scrollY', window.scrollY);
      if (window.scrollY < 200) {
        ref.current.style.opacity = '0';
      } else {
        ref.current.style.opacity = '1';
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function HandleClick(e: React.MouseEvent, type: string) {
    e.preventDefault();
    /*to reach 'Max' you need to click 10 times.*/
    if (type === 'increment') {
      if (counter >= MAX) return;
      setCounter(counter + 1);
    } else if (type === 'decrement') {
      if (counter - 1 < 0) return;
      setCounter(counter - 1);
    }
    setOperation(type);
  }

  return (
    <StyledCounter ref={ref}>
      <div
        onClick={(e) => HandleClick(e, 'increment')}
        onContextMenu={(e) => HandleClick(e, 'decrement')}
      >
        <CountingEmoji icon={icon} />
      </div>
      {counter}
      <GhostNumber counter={counter} max={MAX} operation={operation} />
    </StyledCounter>
  );
};
