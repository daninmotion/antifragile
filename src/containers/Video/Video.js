import React, { Component } from 'react';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

import { StyledCardVideoContainer } from './style';

class Video extends Component {
  state = {
    videos: [
      {url:'https://fast.wistia.net/embed/iframe/txnanvuk7z', id: 'video1', title: "Signing up while trying to book"},
      {url:'https://fast.wistia.net/embed/iframe/mavqu11t73', id: 'video2', title: 'Signing up but I already have an account'},
    ],
    selectedVideo: {url:'https://fast.wistia.net/embed/iframe/txnanvuk7z', id: 'video1', title: "Signing up while trying to book"},
    index_active: 0
  }

  render() {
    return (
      <React.Fragment>
        <section>
          <VideoDetail 
            video={this.state.selectedVideo}
          />
        </section>
        <StyledCardVideoContainer>
          <VideoList 
            onVideoSelect={(userSelected, index) => this.setState({selectedVideo: userSelected, index_active: index})}
            videos={this.state.videos}
            active={this.state.index_active}
          />
        </StyledCardVideoContainer>
      </React.Fragment>
    );
  }
};

export default Video;