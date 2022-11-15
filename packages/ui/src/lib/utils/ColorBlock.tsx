import styled, { css } from "styled-components";

export const GridWrapper = styled.section<{ columns: number }>`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
`

export const ColorBlock = styled.div<{boxShadow?: string, color: string, label:string}>`
  width: 100px;
  height: 100px;
  border-radius: ${props => props.theme.borderRadius.xs};
  border: black 1px solid;
  background-color: ${(props) => props.color};
  ${(props) => props.boxShadow && css<{boxShadow?: string}>`(box-shadow: ${(props) => props.theme[props.boxShadow || 'a']})}`};
  ::after {
    font-size: 15px;
    color: black;
    content: "${(props) => props.label}";
  }
`;