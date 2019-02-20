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

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`

export const StyledVideoListWrapperTwo = styled.div`
  max-width: 600px;

  @media (max-width: 768px) {
    width: 100%;
    padding-left: ${space[2]};
    padding-right: ${space[2]};
  }
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
  margin-left: -${space[3]};

  @media (max-width: 768px) {
    max-width: 200px;
  }
`

export const StyledLeftButtonWrapper = styled.div`
  margin-right: ${space[5]};

  @media (max-width: 768px) {
    margin-right: ${space[0]}
  }
`

export const StyledListWrapper = styled.div`
  max-width: 600px;
  margin-left: ${space[5]};

  @media (max-width: 768px) {
    width: 100%;
    margin-top: ${space[4]};
    margin-left: 80px;
  }
`

export const StyledVideoItemWrapper = styled.div`
  margin-left: ${space[0]};
`