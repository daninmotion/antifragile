import styled from 'styled-components';
import {fontSize, fontWeight, space, colors} from '../../theme';

export const StyledVideoListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-left: ${space[3]};
  padding-right: ${space[3]};

`

export const StyledTitleContainer = styled.div`
  margin-bottom: ${space[4]};
  padding-left: ${space[3]};
  padding-right: ${space[3]};
`

export const StyledTitle = styled.h1`
  font-size: ${fontSize[4]};
  font-weight: ${fontWeight.bold};
  line-height: normal;
`;

export const StyledVideoListTitle = styled.h2`
  font-size: 20px;
  font-weight: ${fontWeight.bold};
  line-height: 1.5;
  margin-bottom: ${space[3]};
  width: 100%;
`

export const StyledVideoUlList = styled.ul`
  margin-left: ${space[3]};
`
export const StyledVerticalDivider = styled.div`
  border-left: 1px solid ${colors.grey02};
  height: 100px;
  margin-left: ${space[6]};
  margin-right: ${space[6]};

  @media (max-width: 768px) {
    display: none;
  }
`

export const StyledVideoItemWrapper = styled.div`
  @media (max-width: 768px) {
    margin-top: ${space[4]};
  }
`
