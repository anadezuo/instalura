import { colorsLight, colorsDark } from '../UI/colorsVariants';
import typographyVariants from '../UI/typographyVariants';
import breakpoints from '../UI/breakpoints';

const borderRadius = '8px';
const transition = '200ms ease-in-out';
const fontFamily = "'Rubik', sans-serif";

export const ThemeLight = {
  colors: colorsLight,
  isDark: false,
  typographyVariants,
  breakpoints,
  borderRadius,
  transition,
  fontFamily,
};

export const ThemeDark = {
  colors: colorsDark,
  isDark: true,
  typographyVariants,
  breakpoints,
  borderRadius,
  transition,
  fontFamily,
};
