import React from 'react';
import iconAvatar from '../../assets/Icons/user.png';
import {StyledNavBarContainer,
        StyledLogo,
        StyledAvatar} from './style';

const NavBar = (props) => (
  <StyledNavBarContainer {...props}>
    <StyledLogo href="/" title="Home">Antifragile UI/UX</StyledLogo>
    <nav>
      <StyledAvatar>
        <img src={props.avatar ? props.avatar : iconAvatar} alt="Avatar" />
      </StyledAvatar>
    </nav>
  </StyledNavBarContainer>
);

export default NavBar;