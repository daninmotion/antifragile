import React, { Component } from 'react';
import CardVideo from '../../components/Card/CardVideo/CardVideo';
// import Player from '../../components/Player/Player';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

import { StyledCardVideoContainer } from './style';

class Video extends Component {
  state = {
    videos: [
      {url:'https://fast.wistia.net/embed/iframe/j35pxlsj3u', id: 'video1', title: 'Airbnb'},
      {url:'http://fast.wistia.net/embed/iframe/e4a27b971d', id: 'video2', title: 'Uber'}
    ],
    selectedVideo: {url:'https://fast.wistia.net/embed/iframe/j35pxlsj3u', id: 'video1', title: 'Airbnb'}
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <div>
            <VideoDetail 
              video={this.state.selectedVideo}
            />
          </div>
          <div>
            <VideoList 
              onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
              videos={this.state.videos}
            />
          </div>
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