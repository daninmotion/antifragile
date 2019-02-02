import styled from 'styled-components';
import {colors} from '../../../theme';

export const StyledCircleButton = styled.div`
  width: 48px;
  height: 48px;
  box-shadow: 0 4px 12px 0 rgba(22, 23, 26, 0.15);
  background-color: ${colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover svg {
    fill: ${colors.purple};
  }

  &:hover {
    transform: scale(1.1, 1.1);
    box-shadow: 0 20px 40px rgba(209,196,255, 0.5);
  }
`;

export const StyledCircleButtonWrapper = styled.div`
  display: flex;
`