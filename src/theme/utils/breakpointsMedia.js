import { css } from 'styled-components';
import breakpoints from '../../UI/breakpoints';

export default function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map((breakpointsName) => css`
      @media screen and (min-width: ${breakpoints[breakpointsName]}px){
        ${cssByBreakpoints[breakpointsName]}
      }`);
  // .join(''); //retorna como uma string
}
