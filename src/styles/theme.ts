import { DefaultTheme } from 'styled-components';

export const calcRem = (size: number) => `${size / 16}rem`;

const theme: DefaultTheme = {
  colors: {
    secondary: '#ffffff',
    lightBlue: '#ffffff',
    darkBlue: '#ffffff',
    success: '#ffffff',
    lightGreen: '#ffffff',
    darkGreen : '#ffffff',
    error: '#ffffff',
    lightRed: '#ffffff',
    darkRed : '#ffffff',
  },
  grayScaleColors: {
    titleActive: '#ffffff',
    font: '#ffffff',
    lightFont: '#ffffff',
    placeHolder: '#ffffff',
    line: '#ffffff',
    inputBackground: '#ffffff',
    background: '#ffffff',
    offWhite:'#ffffff',
  },
  font_weight: {
    thin: 100,
    light: 300,
    regular: 400,
    medium: 500,
    bold : 700,
    black: 900
  },
  font_size: {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(32),
    xxxl: calcRem(40),
    titleSize: calcRem(50),
  },
  margin: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(18),
    xl: calcRem(28),
    xxl: calcRem(32),
    xxxl: calcRem(60),
    titleSize: calcRem(80),
  },
  padding: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(42),
    titleSize: calcRem(80),
  },
};

export default theme;
