import styled from 'styled-components';
import {fontSize, 
        fontWeight, 
        colors, 
        space} from '../../../theme';
// import oval from '../../../assets/icons/oval.svg';

export const StyledCardVideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  font-size: ${fontSize[4]};
  font-weight: ${fontWeight.bold};
  line-height: normal;
`;

export const StyledSubTitle = styled.h2`
  font-size: ${fontSize[2]};
  font-weight: ${fontWeight.bold};
  line-height: 1.5;
`;

export const StyledUlList = styled.ul`
  margin-top: ${space[3]};
  margin-left: ${space[3]};
`;

export const StyledLiTag = styled.li`
  list-style-type: none;
  font-weight: ${props => props.active ? `${fontWeight.bold}` : null};
  position: relative;
  margin-bottom: ${space[2]};

  a {
    text-decoration: none;
  }

  a:active {
    color: ${colors.purple02};
  }

  a.active::before {
    background: ${colors.purple};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    content: " ";
    display: block;
    position: absolute;
    top: .5em;
    left: -1em;
  }

  a.locked {
    font-weight: normal;
    font-size: ${fontSize[1]};
    color: ${colors.grey03};
  }

  a.locked::before {
    background: ${colors.grey02};
    width: 8px;
    height: 8px;
    border-radius: 50%;
    content: " ";
    display: block;
    position: absolute;
    top: .5em;
    left: -1em;
  }
`;

export const StyledNavContainer = styled.div`
  border: solid red;
  display: flex;
  align-items: center;
`

