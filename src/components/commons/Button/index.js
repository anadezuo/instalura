import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import Link from '../Link';
import { TextStyleVariantsMap } from '../../foundation/Text';
import breakpointsMedia from '../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../theme/utils/propToStyle';

const ButtonDefault = css`
  background-color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
  color: ${(props) => get(props.theme, `colors.${props.variant}.contrastText`)};
`;

const ButtonGhost = css`
  background: transparent;
  color: ${(props) => get(props.theme, `colors.${props.variant}.color`)};
`;

const ButtonBase = styled.button`
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

  ${TextStyleVariantsMap.smallestException};

  ${(props) => (props.ghost ? ButtonGhost : ButtonDefault)}

  transition: opacity ${({ theme }) => theme.transition};
  border-radius: ${(props) => props.theme.borderRadius};

  ${propToStyle('margin')};
  ${propToStyle('marginTop')};
  ${propToStyle('display')};

  &:disabled {
    cursor: not-allowed;
    opacity: 0.2;
  }

  ${({ fullWidth }) => fullWidth
    && css`
      width: 100%;
    `};

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;

export default function Button({ href, children, ...props }) {
  const tag = href ? Link : 'button';

  return (
    <ButtonBase
      as={tag}
      href={href}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </ButtonBase>
  );
}

Button.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  href: undefined,
};
