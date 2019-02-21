import React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';
import Overdrive from 'react-overdrive';
import List from '../../components/Lists/List';

// import { space } from '../../theme';
import {
  StyledVideoListContainer,
  StyledTitle,
  StyledVideoListTitle,
  StyledVideoUlList,
  StyledVerticalDivider,
  StyledTitleContainer,
  StyledVideoItemWrapper
} from './style';

const VideoList = (props) => {
  const videoItems = props.videos.map((video, play) => {
    return (
      <VideoListItem
        key={video.id}
        video={video}
        onUserSelected={props.onVideoSelect}
        play={props.play}
      />
    )
  });

  return (
    <React.Fragment>
      <StyledTitleContainer>
        <Overdrive id="airbnb">
          <StyledTitle>Airbnb</StyledTitle>
        </Overdrive>
      </StyledTitleContainer>
      <StyledVideoListContainer>
        <div>
          <StyledVideoListTitle>Sign up</StyledVideoListTitle>
          <StyledVideoUlList>
            {videoItems}
          </StyledVideoUlList>
        </div>
        <div>
          <StyledVerticalDivider />
        </div>
        <StyledVideoItemWrapper>
          <List 
            listItem="Confirm your email"
          />
        </StyledVideoItemWrapper>
      </StyledVideoListContainer>
    </React.Fragment>
  )
};

export default VideoList;