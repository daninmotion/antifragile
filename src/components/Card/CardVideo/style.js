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

// export const StyledLiTag = styled.li`
//   list-style-type: none;
//   /* font-weight: ${props => props.active ? `${fontWeight.bold}` : null}; */
//   position: relative;
//   margin-bottom: ${space[2]};

//   button {
//     text-decoration: none;
//   }

//   button:active {
//     color: ${colors.purple02};
//     color: ${props => props.active ? `${colors.purple02}` : `${colors.grey03}`}
//   }

//   button.active {
//     font-weight: ${fontWeight.bold};
//     font-size: ${fontSize[1]};
//     color: ${colors.purple};
//   }

//   button.active::before {
//     background: ${colors.purple};
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//     content: " ";
//     display: block;
//     position: absolute;
//     top: .5em;
//     left: -1em;
//   }

//   button.locked {
//     font-weight: normal;
//     font-size: ${fontSize[1]};
//     color: ${colors.grey03};
//   }

//   button.locked::before {
//     background: ${colors.grey02};
//     width: 8px;
//     height: 8px;
//     border-radius: 50%;
//     content: " ";
//     display: block;
//     position: absolute;
//     top: .5em;
//     left: -1em;
//   }
// `;




export const StyledLiTag = styled.li`
  list-style-type: none;
  /* font-weight: ${props => props.active ? `${fontWeight.bold}` : null}; */
  position: relative;
  margin-bottom: ${space[2]};
`;

export const StyledButton = styled.button`
  text-decoration: none;
  font-size: ${fontSize[1]};
  color: ${props => props.play ? `${colors.purple}` : `${colors.grey03}`};
  font-weight: ${props => props.play ? `${fontWeight.bold}` : 'normal' };

  ::before {
    background: ${props => props.play ? `${colors.purple}` : `${colors.grey02}` };
    width: 8px;
    height: 8px;
    border-radius: 50%;
    content: " ";
    display: block;
    position: absolute;
    top: .5em;
    left: -1em;
  }
`

export const StyledNavContainer = styled.div`
  display: flex;
  align-items: center;
`

