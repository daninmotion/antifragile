import React, { Component } from 'react';
import CircleButton from '../../Buttons/CircleButton/CircleButton';
import List from '../../Lists/List';
import Overdrive from 'react-overdrive';

import { space, colors } from '../../../theme';
import {
  StyledCardVideoContainer,
  StyledTitle,
  StyledSubTitle,
  StyledUlList,
  StyledLiTag,
  StyledNavContainer,
  StyledButton
} from './style';

class CardVideo extends Component {

  render() {
    return (
      <React.Fragment>
        <div style={{ marginBottom: space[3] }}>
          <Overdrive id="airbnb">
            <StyledTitle>Airbnb</StyledTitle>
          </Overdrive>
        </div>
        <StyledCardVideoContainer>
          <div style={{ width: '600px' }}>
            <div>
              <div>
                <StyledNavContainer>
                  <div style={{ marginRight: space[4] }}>
                    <div>
                      <CircleButton
                        width="28"
                        height="28"
                        fill={colors.grey03}
                        name="icon-arrow-left"
                      />
                    </div>
                  </div>
                  <div>
                    <StyledSubTitle>Sign up while booking</StyledSubTitle>
                    <StyledUlList>
                      <StyledLiTag>
                        <StyledButton play>No errors</StyledButton>
                      </StyledLiTag>
                      <StyledLiTag>
                        <StyledButton>With errors</StyledButton>
                      </StyledLiTag>
                    </StyledUlList>
                  </div>
                  <div style={{ marginLeft: space[6] }}>
                    <CircleButton
                      width="28"
                      height="28"
                      fill={colors.grey03}
                      name="icon-arrow-right"
                    />
                  </div>
                </StyledNavContainer>
              </div>
            </div>
          </div>
          <div style={{ width: '600px' }}>
            <div>
              <List
                listItem="Problem with ID"
              />
            </div>
          </div>
        </StyledCardVideoContainer >
      </React.Fragment>
    );
  }
};

export default CardVideo;