import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { TextStyleVariantsMap } from '../../foundation/Text'

const ButtonDefault = css`
  background-color: ${(props) =>
    get(props.theme, `colors.${props.variant}.color`)};
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
  ${TextStyleVariantsMap .smallestException}

  ${function (props) {
    return props.ghost ? ButtonGhost : ButtonDefault;
  }}
  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
