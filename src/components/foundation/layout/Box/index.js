import styled from 'styled-components';
import propToStyle from '../../../../theme/utils/propToStyle';

const Box = styled.div`
  ${propToStyle('flex')};
  ${propToStyle('display')};
  ${propToStyle('flexDirection')};
  ${propToStyle('justifyContent')};
  ${propToStyle('flexWrap')};
  ${propToStyle('alignItems')}
  ${propToStyle('backgroundColor')};
  ${propToStyle('backgroundImage')};
  ${propToStyle('backgroundRepeat')};
  ${propToStyle('backgroundPosition')};
  ${propToStyle('zIndex')};
  ${propToStyle('boxShadow')};
  ${propToStyle('padding')};

  ${propToStyle('width')}
  ${propToStyle('listStyle')}
  ${propToStyle('margin')}
  ${propToStyle('marginLeft')}
  ${propToStyle('marginTop')}
  ${propToStyle('marginBottom')}
  ${propToStyle('marginRight')}
  ${propToStyle('height')}
  ${({ theme, borderRadiusTheme }) => borderRadiusTheme && `border-radius: ${theme.borderRadius}`};
`;

export default Box;
