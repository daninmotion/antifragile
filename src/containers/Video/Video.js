import React, {Component} from 'react';
import CardVideo from '../../components/Card/CardVideo/CardVideo';
import {StyledCardVideoContainer} from './style';

class Video extends Component {
  render() {
    return (
      <React.Fragment>
        <StyledCardVideoContainer>
          <CardVideo 
          />
        </StyledCardVideoContainer>
      </React.Fragment>
    );
  }
};

export default Video;