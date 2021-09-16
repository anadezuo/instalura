import styled, { css } from 'styled-components';
import breakpointsMedia from '../../../../theme/utils/breakpointsMedia';
import propToStyle from '../../../../theme/utils/propToStyle';

const Container = styled.div`
  width: 100%;
  padding-right: 28px;
  padding-left: 28px;
  margin-right: auto;
  margin-left: auto;
  max-width: initial;

  ${breakpointsMedia({
    sm: css`
      max-width: 576px;
    `,
    md: css`
      max-width: 768px;
      padding-right: 16px;
      padding-left: 16px;
    `,
    lg: css`
      max-width: 1160px;
    `,
    xl: css`
      max-width: 1222px;
    `,
  })}

  ${propToStyle('marginTop')};
  ${propToStyle('backgroundColor')};
  ${propToStyle('height')};
  ${propToStyle('justifyContent')};
  ${propToStyle('display')};
  ${propToStyle('flex')};
  ${propToStyle('alignItems')};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -16px;
  margin-left: -16px;
  ${propToStyle('flex')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${propToStyle('justifyContent')}
  ${propToStyle('backgroundColor')};
  ${propToStyle('flexDirection')}
`;

function createCssColumnsByValue(value) {
  return value
    ? css`
            flex-grow: 0;
            flex-shrink: 0;
            flex-basis: ${(100 * value) / 12}%;
            max-width: ${(100 * value) / 12}%;
          `
    : '';
}

function createCssColumnsByOffSet(offset) {
  return offset ? css`margin-left: ${(100 * offset) / 12}%;` : '';
}

const Col = styled.div`
  padding-right: 16px;
  padding-left: 16px;
  flex-basis: 0;
  flex-grow: 1;
  max-width: 100%;

  ${({ value }) => {
    if (typeof value === 'number') {
      return createCssColumnsByValue(value);
    }
    return breakpointsMedia({
      xs: createCssColumnsByValue(value?.xs),
      sm: createCssColumnsByValue(value?.sm),
      md: createCssColumnsByValue(value?.md),
      lg: createCssColumnsByValue(value?.lg),
      xl: createCssColumnsByValue(value?.xl),
    });
  }};

  ${({ offset }) => {
    if (typeof offset === 'number') {
      return createCssColumnsByOffSet(offset);
    }
    return breakpointsMedia({
      xs: createCssColumnsByOffSet(offset?.xs),
      sm: createCssColumnsByOffSet(offset?.sm),
      md: createCssColumnsByOffSet(offset?.md),
      lg: createCssColumnsByOffSet(offset?.lg),
      xl: createCssColumnsByOffSet(offset?.xl),
    });
  }};

  ${propToStyle('display')};
  ${propToStyle('alignItems')};
  ${propToStyle('justifyContent')};
  ${propToStyle('flexDirection')};
  ${propToStyle('backgroundColor')};
  ${propToStyle('paddingRight')};
  ${propToStyle('order')}
  ${propToStyle('height')}

`;

const Grid = {
  Container,
  Row,
  Col,
};

export default Grid;
