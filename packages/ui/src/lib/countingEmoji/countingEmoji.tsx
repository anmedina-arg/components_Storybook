import styled from 'styled-components';
import { useRef } from 'react';
import ConfettiExplosion from 'react-confetti-explosion';
import { useState } from 'react';
import { Counter } from './counter';

/* eslint-disable-next-line */
export interface ButtonProps {}

const StyledButton = styled.div`
  margin-right: 6rem;
  overflow: hidden;
  width: 300px;
  height: 300px;
  /* border-radius: 30%;
  box-sizing: border-box; */
  /* border: 1px solid red; */
  &:hover {
    animation: funMove 0.5s;
  }
  svg {
    width: 300px;
    height: 300px;
  }

  .box1 {
    position: absolute;
    overflow: hidden;
    height: 300px;
    stroke: #c4c4c4;
    fill: #c4c4c4;
    // add opacity to look like unpress button
    stroke-opacity: 0.9;
    fill-opacity: 0.9;
    stroke-width: 0.5px;
  }

  .box2 {
    // add stroke width to let the first click paint in red, other wise just appear the black stroke, and in the second click start to see some red color.
    stroke-width: 0.5px;
    stroke: #000;
    fill: red;
    transition: all 0.5s ease;
  }

  @keyframes funMove {
    25% {
      transform: rotate(15deg);
    }
    50% {
      transform: rotate(-30deg);
    }
    75% {
      transform: rotate(5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

type CountingEmojiProps = {
  icon?: JSX.Element;
};

export const CountingEmoji = ({ icon }: CountingEmojiProps) => {
  const [isExploding, setIsExploding] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  function HandleClick(e: React.MouseEvent, type: string) {
    e.preventDefault();
    if (ref.current === null) return;
    if (type === 'increment') {
      /*to reach the top you need to click 10 times.*/
      const altura = ref.current.clientHeight; // 300px //270 // (270-27)=243//243-24.3
      //                       = 300px - 30px
      ref.current.style.height = ref.current.clientHeight - 0.1 * altura + 'px';
      //transition for the color
      //add state for transition...
      //   ref.current.style.transition = 'all 0.3s ease';
      if (ref.current.clientHeight === 0) {
        setIsExploding(true);
      }
    } else if (type === 'decrement') {
      console.log('Right click');
      if (ref.current.clientHeight >= 300) {
        ref.current.style.height = 300 + 'px';
        console.log(ref.current.clientHeight);
      } else {
        ref.current.style.height = ref.current.clientHeight + 30 + 'px';
        setIsExploding(false);
      }
    }
    console.log(ref.current.clientHeight);
  }
  /* to fix the icon import proble, i remove de class and some properties for the icon in de './icons/index' file.  */
  return (
    <StyledButton
      onContextMenu={(e) => HandleClick(e, 'decrement')}
      onClick={(e) => HandleClick(e, 'increment')}
    >
      {isExploding && (
        <ConfettiExplosion
          force={0.2}
          duration={3000}
          particleCount={200}
          height={800}
          width={800}
        />
      )}
      <div ref={ref} className="box1">
        {icon}
      </div>
      <div className="box2">{icon}</div>
    </StyledButton>
  );
};
