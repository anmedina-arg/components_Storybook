import { createGlobalStyle, css } from 'styled-components';
import { resetCSS } from './cssReset';
import { ThemeType } from './theme';

type globalStyleProps = {
  theme: ThemeType;
}

export const GlobalStyle = createGlobalStyle(
  ({ theme }: globalStyleProps) => css`
    ${resetCSS}
    // smooth light-dark mode transition
    * {
      transition: all 250ms ease-in;
      transition-property: background, color, border;
    }
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap');
    html {
      font-family: 'Inter', sans-serif;
      font-size: ${theme.typography.fontSize.base};
    }
    body {
      margin: 0;
      padding: 0;
    }

`);