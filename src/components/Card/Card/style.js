import styled from 'styled-components';
import {colors, space, fontWeight, fontSize} from '../../../theme';

export const StyledCard = styled.div`
  background-color: ${colors.white};
  margin: auto;
  max-width: 984px;
  height: 318px;
  padding: ${space[1]};
  border-bottom: 1px solid ${colors.grey04};
  transition: all 0.2s ease-in-out 0s;

  &:hover {
    transform: translateY(-3px);
    transition: all 0.2s ease-in-out 0s;
    border-radius: 8px;
    box-shadow: 0 20px 40px rgba(209,196,255, 0.5);
  }

  h1 {
    font-size: ${fontSize[5]};
    font-weight: ${fontWeight.bold};
    line-height: 1.17;
  }

  p {
    margin-top: ${space[4]};
    font-size: ${fontSize[2]};
    font-weight: ${fontWeight.bold};
  }
`;

export const StyledCardWrapper = styled.div`
  margin-top: ${space[4]};
  padding-left: ${space[5]};

  @media (max-width: 768px) {
    padding-left: ${space[4]};
  }
`

export const StyledListWrapper = styled.ul`
  margin-top: ${space[3]};
  li {
    list-style-type: none;
  }
`