import React from 'react';
import TextButton from '../Buttons/TextButton/TextButton';

import {StyledUL, StyledLI,StyledSubTitle} from './style';
import { colors } from '../../theme';

const List = (props) => (
  <React.Fragment>
    <StyledSubTitle>Emails</StyledSubTitle>
    <StyledUL>
      <StyledLI>
        <TextButton 
          icon
          href="/" 
          target="_blank"
          name="icon-arrow-up-right"
          width="16"
          height="16"
          fill={colors.blue}
        >
          {props.listItem}
        </TextButton>
      </StyledLI>
    </StyledUL>
  </React.Fragment>
);

export default List;