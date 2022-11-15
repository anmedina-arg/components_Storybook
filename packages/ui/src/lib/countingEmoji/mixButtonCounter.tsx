import { Counter } from './counter';
import { CountingEmoji } from './countingEmoji';
import styled from 'styled-components';
import { useRef } from 'react';

type MixButtonCounterProps = {
  icon?: JSX.Element;
};

const StyledMixButtonCounter = styled.div`
  border: 1px solid blue;
  padding: 5px;
  display: flex;
  align-items: center;
`;

export function MixButtonCounter({ icon }: MixButtonCounterProps) {
  // const ref1 = useRef<HTMLDivElement>(null);
  // const ref2 = useRef<HTMLDivElement>(null);

  // function handleEvent(e:any, type: string) {
  //   if (ref1.current === null) return;
  //   console.log(ref1.current);
    
  // }

  return (
    <StyledMixButtonCounter
      // className="mixBtn-container"
      //  onClick={(e) =>handleEvent(e, 'increment')}
      // onContextMenu={(e) => {
      //   e.preventDefault(),
      //   handleEvent(e, 'decrement');
      // }}
    >asd
      {/* <div ref={ref1} >
        <CountingEmoji  icon={icon} />        
      </div>
      <div >
        
      </div> */}
    </StyledMixButtonCounter>
  );
}
