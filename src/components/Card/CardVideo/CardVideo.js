import React from 'react';
import {space, colors} from '../../../theme';
import CircleButton from '../../Buttons/CircleButton/CircleButton';

import {
  StyledCardVideoContainer,
  StyledTitle,
  StyledSubTitle,
  StyledUlList,
  StyledLiTag,
  StyledNavContainer
} from './style';

const CardVideo = (props) => (
  <StyledCardVideoContainer>
    <div style={{ border: 'solid green', width: '600px' }}>
      <div>
        <StyledTitle>Flows</StyledTitle>
        <div>
          <StyledNavContainer>
            <div style={{marginRight: `${space[4]}`}}>
              <div style={{border: 'solid green'}}>
                <CircleButton
                  width="28"
                  height="28"
                  fill={`${colors.grey03}`}
                  name="icon-arrow-left"
                />
              </div>
            </div>
            <div>
              <StyledSubTitle>Sign up while booking</StyledSubTitle>
              <StyledUlList>
                <StyledLiTag>
                  <a href="/" className="locked">No errors</a>
                </StyledLiTag>
                <StyledLiTag active>
                  <a href="/" className="active">With errors</a>
                </StyledLiTag>
              </StyledUlList>
            </div>
            <div style={{border: 'solid green'}}>
              <CircleButton
                width="28"
                height="28"
                fill={`${colors.grey03}`}
                name="icon-arrow-right"
              />
            </div>
          </StyledNavContainer>
        </div>
      </div>
    </div>
    <div style={{ border: 'solid green', width: '600px' }}>
      <div>
        <p>Right</p>
      </div>
    </div>
  </StyledCardVideoContainer >
);

export default CardVideo;