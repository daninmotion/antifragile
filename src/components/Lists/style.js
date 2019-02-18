import styled from 'styled-components';
import {fontSize, fontWeight, space} from '../../theme';

export const StyledUL = styled.ul`

`

export const StyledLI = styled.li`
  display: flex;
  list-style-type: none;
  align-items: center;

  &:hover {
    svg {
      animation: bounce 2s;
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(0) translateY(0);
      }
      40% {
        transform: translateX(20px) translateY(-20px);
      }
      60% {
        transform: translateX(6px) translateY(-6px);
      }
    }
  }
`

export const StyledSubTitle = styled.h2`
  font-size: ${fontSize[2]};
  font-weight: ${fontWeight.bold};
  line-height: 1.5;
  margin-bottom: ${space[3]};
`;