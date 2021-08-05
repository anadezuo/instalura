import breakpoints from "../../UI/breakpoints";
import { css } from 'styled-components';

export default function breakpointsMedia(cssByBreakpoints) {
  const breakpointsNames = Object.keys(cssByBreakpoints);

  return breakpointsNames.map((breakpointsName) => {
    return css`
      @media screen and (min-width: ${breakpoints[breakpointsName]}px){
        ${cssByBreakpoints[breakpointsName]}
      }`;
  });
  //.join(''); //retorna como uma string
}
