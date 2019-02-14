import React from 'react';
import SVGIcon from '../../../assets/Icons/index';

import {StyledTextButton, StyledSVGWrapper} from './style';


const TextButton = (props) => (
  <StyledTextButton {...props}>
    <div>
      {props.children}
    </div>
    <StyledSVGWrapper>
      {
        props.icon ? <SVGIcon width={props.width} height={props.height} name={props.name} fill={props.fill}/> : null
      }
    </StyledSVGWrapper>
  </StyledTextButton>
)

export default TextButton;