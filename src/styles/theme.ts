import { DefaultTheme } from 'styled-components';

export const calcRem = (size: number) => `${size / 16}rem`;

const theme: DefaultTheme = {
  colors: {},
  grayScaleColors: {},
  font_size: {
    small: calcRem(14),
    base: calcRem(16),
    lg: calcRem(18),
    xl: calcRem(20),
    xxl: calcRem(32),
    xxxl: calcRem(40),
    titleSize: calcRem(50),
  },
  font_weight: {},
  line_height: {},
  margin: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(18),
    xl: calcRem(28),
    xxl: calcRem(32),
    xxxl: calcRem(60),
  },
  padding: {
    small: calcRem(8),
    base: calcRem(10),
    lg: calcRem(12),
    xl: calcRem(14),
    xxl: calcRem(16),
    xxxl: calcRem(42),
  },
  width: {},
  height: {},
  box_shadow: {},
  border_radius: {},
  border_width: {},
  opacity: {},
};

export default theme;
