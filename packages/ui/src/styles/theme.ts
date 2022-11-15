export enum THEMES {
  LIGHT = 'light',
  DARK = 'dark',
}

export type ThemeType = {
  name: string;
  text: string; // base text color
  slate: string; // greyed out text color
  screenBackground: string; // background color used for the storybook screen
  bg: string; // background color
  typography: typeof typography;
  borderRadius: typeof borderRadius;
  boxShadow: typeof boxShadow;
  spacing: typeof spacing;
  colors: {
    primary: string;
    secondary: string;
    white: string;
    black: string;
    success: Record<string, string>;
    info: Record<string, string>;
    warning: Record<string, string>;
    danger: Record<string, string>;
    grey: Record<string, string>;
  };
  semantic: Record<string, string>;
  neutrals: Record<string, string>;
};

const baseColors = {
  white: '#FFFFFF ',
  black: '#202020',
  success: {
    100: '#CDFCD2',
    200: '#9CF9B0',
    300: '#68ED93',
    400: '#42DC82',
    500: '#0DC66D',
    600: '#09AA6D',
    700: '#068E68',
    800: '#04725E',
    900: '#025F57',
  },
  info: {
    100: '#CBFDFE',
    200: '#98F5FD',
    300: '#64E4FB',
    400: '#3DCEF7',
    500: '#00ADF2',
    600: '#0086D0',
    700: '#0064AE',
    800: '#00478C',
    900: '#003374',
  },
  warning: {
    100: '#FEF7CC',
    200: '#FDED9B',
    300: '#FBDF68',
    400: '#F7D143',
    500: '#F2BB07',
    600: '#D09B05',
    700: '#AE7E03',
    800: '#8C6102',
    900: '#744E01',
  },
  danger: {
    100: '#FEE7D5',
    200: '#FEC8AD',
    300: '#FEA383',
    400: '#FD8064',
    500: '#FC4632',
    600: '#D82724',
    700: '#B51923',
    800: '#920F22',
    900: '#780922',
  },
  grey: {
    50: '#f9fafb',
    100: '#f3f4f6',
    200: '#e5e7eb',
    300: '#d1d5db',
    400: '#9ca3af',
    500: '#6b7280',
    600: '#4b5563',
    700: '#374151',
    800: '#1f2937',
    900: '#111827',
  },
};

const spaceUnit = 1;

const borderRadius = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '24px',
  xl: '32px',
  xxl: '40px',
  round: '50%',
};

const spacing = {
  xxs: `${0.25 * spaceUnit}em`,
  xs: `${0.5 * spaceUnit}em`,
  s: `${spaceUnit}em`,
  m: `${1.25 * spaceUnit}em`,
  l: `${2 * spaceUnit}em`,
  xl: `${3.25 * spaceUnit}em`,
  xxl: `${5.25 * spaceUnit}em`,
};

const boxShadow = {
  card: '0px 14px 26px 0px rgba(0, 0, 0, 0.08)',
  inner: 'inset 0 3px 0 0 rgba(0, 0, 0, 0.05)',
  outerBorder: `0 0 0 1px ${baseColors.grey[300]}, 0 0 0 4px ${baseColors.grey[100]}`,
};

const typography = {
  fontSize: {
    base: '22px',
    lg: '1.125rem',
    m: '1rem',
    s: '0.9rem',
    xs: '0.72rem',
    heading1: '2.74rem',
    heading2: '2.19rem',
    heading3: '1.75rem',
    heading4: '1.4rem',
  },
  fontWeight: {
    black: '900',
    bold: '600',
    medium: '400',
    regular: '300',
  },
};

const defaultTheme: ThemeType = {
  name: 'default',
  text: baseColors.black,
  slate: baseColors.grey[50],
  screenBackground: baseColors.white,
  bg: baseColors.white,
  typography,
  borderRadius,
  boxShadow,
  spacing,
  colors: {
    primary: '#673FD7',
    secondary: '#db91cb',
    ...baseColors,
  },
  semantic: {
    error: baseColors.danger[300],
    warning: baseColors.warning[300],
    info: baseColors.info[500],
  },
  neutrals: {
    white: baseColors.white,
    black: baseColors.black,
  },
};

export const dark: ThemeType = {
  ...defaultTheme,
  name: 'dark',
  text: baseColors.white,
  slate: baseColors.grey[200],
  bg: baseColors.grey[600],
  screenBackground: baseColors.black,
};

export const light: ThemeType = {
  ...defaultTheme,
  name: 'light',
  text: baseColors.black,
  slate: baseColors.grey[600],
  bg: baseColors.grey[200],
  screenBackground: baseColors.white,
};
