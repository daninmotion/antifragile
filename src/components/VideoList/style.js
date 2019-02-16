import styled from 'styled-components';
import {fontSize, fontWeight, colors, space} from '../../theme';

export const StyledVideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StyledTitle = styled.h1`
  font-size: ${fontSize[4]};
  font-weight: ${fontWeight.bold};
  line-height: normal;
`;

export const StyledVideoListWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StyledDivider = styled.div`
  width: 2px;
  margin-left: ${space[5]};
  background: ${colors.grey04};
`

export const StyledULTitle = styled.h2`
  font-size: ${fontSize[2]};
  font-weight: 600;
  line-height: 1.5;
  width: 320px;
  margin-bottom: ${space[3]};
`