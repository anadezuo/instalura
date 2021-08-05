import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonDefault = css`
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonGhost = css`
  background: transparent;
  color: ${function (props) {
    return get(props.theme, `colors.${props.variant}.color`);
  }};
`;

export const Button = styled.button`
  border: 0;
  cursor: pointer;
  padding: 12px 26px;
  font-weight: bold;
  opacity: 1;
  ${breakpointsMedia({
    xs: css`
      ${TextStyleVariantsMap.smallestException}
    `,
    md: css`
      ${TextStyleVariantsMap.paragraph1}
    `,
  })};

  ${TextStyleVariantsMap.smallestException}

  ${function (props) {
    return props.ghost ? ButtonGhost : ButtonDefault;
  }};

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};

  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('display')};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
