import styled from 'styled-components';
import {fontSize, fontWeight} from '../../theme';

export const StyledUL = styled.ul`

`

export const StyledLI = styled.li`
  display: flex;
  list-style-type: none;
  align-items: center;
`

export const StyledSubTitle = styled.h2`
  font-size: ${fontSize[2]};
  font-weight: ${fontWeight.bold};
  line-height: 1.5;
`;