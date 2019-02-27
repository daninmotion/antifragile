import React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';
import Overdrive from 'react-overdrive';
import List from '../../components/Lists/List';
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
  const videoItems = props.videos.map((video, index) => {
    return (
      <VideoListItem
        key={video.id}//what i'm passing in
        video={video} //what i'm passing in
        active={props.active} //what i'm passing in
        index={index} //what i'm passing in
        onUserSelected={props.onVideoSelect} //what is being PASSED IN
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
            href="https://s3.amazonaws.com/antifragile-ui-ux/Sign+up/Confirmation+email.png"
          />
        </StyledVideoItemWrapper>
      </StyledVideoListContainer>
    </React.Fragment>
  )
};

export default VideoList;