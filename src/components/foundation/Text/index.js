import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import propToStyle from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  paragraph1: css`
    font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.paragraph1.lineHeight};
  `,
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
};

function hasColor(props) {
  if (props.color !== undefined) {
    // eslint-disable-next-line no-shadow
    return css`color: ${(props) => get(props.theme, `colors.${props.color}.color`)};`;
  }
  return '';
}

const TextBase = styled.span`
  ${(props) => TextStyleVariantsMap[props.variant]}
  ${propToStyle('textAlign')};
  ${propToStyle('marginBottom')};
  ${propToStyle('margin')};
  ${propToStyle('marginTop')};

  ${(props) => hasColor(props)};
  ${propToStyle('backgroundColor')}
`;

export function Text({
  tag, variant, children, ...props
}) {
  return (
    <TextBase
      as={tag}
      variant={variant}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {... props}
    >
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
};
