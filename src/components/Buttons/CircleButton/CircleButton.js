import React from 'react';
import IconLeftArrow from '../../../assets/Icons/IconLeftArrow/IconLeftArrow';
import {colors} from '../../../theme';

import { StyledCircleButton,
         StyledCircleButtonWrapper } from './style';

const CircleButton = (props) => (
  <StyledCircleButton {...props}>
    <StyledCircleButtonWrapper>
      <IconLeftArrow
        width="28"
        height="28"
        fill={`${colors.grey03}`}
        svg={props.svg}
      />
    </StyledCircleButtonWrapper>
  </StyledCircleButton>
);

export default CircleButton;