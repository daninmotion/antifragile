import styled from 'styled-components';
import {fontSize, fontWeight, space, colors} from '../../theme';

export const StyledTitle = styled.h1`
  font-size: ${fontSize[6]};
  font-weight: ${fontWeight.bold};
  line-height: 1.15;

  @media (max-width: 768px) {
    font-size: 8rem;
    color: ${colors.grey04};
    opacity: .5;
  }
`

export const StyledTitleWrapper = styled.div`
  @media (max-width: 768px) {
    position: absolute;
  }
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

  @media (max-width: 768px) {
    position: relative;
  }
`

export const StyledAnchor = styled.a`
  text-decoration: none;
  color: ${colors.blue};
`