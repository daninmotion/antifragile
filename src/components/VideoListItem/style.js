import styled from 'styled-components';
import {space, 
        fontSize, 
        fontWeight, 
        colors} from '../../theme';

export const StyledLiTag = styled.li`
  list-style-type: none;
  position: relative;
  margin-bottom: ${space[2]};
  min-width: 320px;
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