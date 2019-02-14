import React, { Component } from 'react';
import CardVideo from '../../components/Card/CardVideo/CardVideo';
import Player from '../../components/Player/Player';

import { StyledCardVideoContainer } from './style';

const videos = [
  {url:'https://fast.wistia.net/embed/iframe/j35pxlsj3u', title: 'airbnb'}
]

class Video extends Component {
  render() {
    return (
      <React.Fragment>
        <section>
          {videos.map((video, index) => (
              <Player
                key={index}
                url={video.url}
              />
            ))}
        </section>
        <StyledCardVideoContainer>
          <CardVideo
          />
        </StyledCardVideoContainer>
      </React.Fragment>
    );
  }
};

export default Video;