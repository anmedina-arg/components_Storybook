import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { GridWrapper, ColorBlock } from "./utils/ColorBlock";

const Pallete =() => {
  const themeProps = useContext(ThemeContext)
  return (<>
    <h1>Colors</h1>
    <GridWrapper columns={4}>
      {Object.keys(themeProps.colors).map((color: string) => <ColorBlock color={themeProps.colors[color]} label={color} />)}
      <ColorBlock color="red" boxShadow="boxShadow1" label="shadow"/>
    </GridWrapper>
    <h1>Semantic</h1>
    <GridWrapper columns={4}>
      {Object.keys(themeProps.semantic).map((color: string) => <ColorBlock color={themeProps.semantic[color]} label={color} />)}
    </GridWrapper>
    <h1>Neutral</h1>
    <GridWrapper columns={4}>
      {Object.keys(themeProps.neutrals).map((color: string) => <ColorBlock color={themeProps.neutrals[color]} label={color} />)}
    </GridWrapper>
  </>);
}

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Pallete',
  component: Pallete,
};

export const Primary = () => <Pallete />;
