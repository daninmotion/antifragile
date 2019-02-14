import styled from 'styled-components';
import {colors, 
        fontSize, 
        fontWeight,
        space} from '../../../theme';

export const StyledTextButton = styled.a`
  font-size: ${fontSize[1]};
  font-weight: ${fontWeight.bold};
  color: ${colors.blue};
  text-decoration: none;
  display: flex;
  align-items: center;
`

export const StyledSVGWrapper = styled.div`
  margin-top: ${space[2]};
  margin-left: ${space[1]};
`