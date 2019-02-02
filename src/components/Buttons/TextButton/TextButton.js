import React from 'react';
import {StyledTextButton} from './style';

const TextButton = (props) => (
  <StyledTextButton {...props}>
    {props.children}
  </StyledTextButton>
)

export default TextButton;