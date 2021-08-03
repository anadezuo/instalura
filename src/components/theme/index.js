import { colorsLight, colorsDark } from '../UI/colorsVariants';
import { typographyVariants } from '../UI/typographyVariants';

const borderRadius = '8px';
const transition = '200ms ease-in-out';
const fontFamily = "'Rubik', sans-serif";

export const ThemeLight = {
  colors: colorsLight,
  typographyVariants,
  borderRadius,
  transition,
  fontFamily,
};

export const ThemeDark = {
  colors: colorsDark,
  typographyVariants,
  borderRadius,
  transition,
  fontFamily,
};
