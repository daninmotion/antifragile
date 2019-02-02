import React from 'react';
import SVGIcon from '../../../assets/Icons/index';

import { StyledCircleButton,
         StyledCircleButtonWrapper } from './style';

const CircleButton = (props) => (
  <StyledCircleButton {...props}>
    <StyledCircleButtonWrapper>
      <SVGIcon
        name={props.name}
        width={props.width}
        height={props.height}
        fill={props.fill}
        title={props.name}
      />
    </StyledCircleButtonWrapper>
  </StyledCircleButton>
);

export default CircleButton;