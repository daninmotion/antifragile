import styled from 'styled-components';
import {fontSize, fontWeight, space, colors} from '../../theme';

export const StyledTitle = styled.h1`
  font-size: ${fontSize[6]};
  font-weight: ${fontWeight.bold};
  line-height: 1.15;
`

export const StyledParagraph = styled.p`
  max-width: 320px;
  font-size: 20px;
  font-weight: ${fontWeight.bold};
  font-weight: normal;
  line-height: 1.5;

`

export const StyledHeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${space[6]};
`

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${colors.blue};
`