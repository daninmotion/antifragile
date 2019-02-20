import styled from 'styled-components';
import {colors,
        fontSize,
        fontWeight,
        space} from '../../theme';

export const StyledNavBarContainer = styled.div`
  background-color: ${colors.white};
  height: ${space[4]};
  /* box-shadow: 0 4px 12px 0 rgba(22, 23, 26, 0.1); */
  box-shadow: 0 0 15px 0 rgba(0,0,0,0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${space[3]};
`

export const StyledLogo = styled.a`
  text-decoration: none;
  font-size: ${fontSize[3]};
  font-weight: ${fontWeight.bold};
  color: ${colors.black};
`

export const StyledAvatar = styled.div`
  img {
    cursor: pointer;
    width: 32px;
    height: 32px;
    box-shadow: inset 0 0 3px 0 rgba(22, 23, 26, 0.28);
    clip-path: circle(16px at center);
  }
`

export const StyledBlackAvatar = styled.div`
  width: 32px;
  height: 32px;
  box-shadow: inset 0 0 3px 0 rgba(22, 23, 26, 0.28);
  border-radius: 100%;
  background-color: ${colors.black};
`
