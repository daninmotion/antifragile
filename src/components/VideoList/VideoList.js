import React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';
import Overdrive from 'react-overdrive';
import CircleButton from '../Buttons/CircleButton/CircleButton';
import List from '../../components/Lists/List';

import { space, colors } from '../../theme';
import {
  StyledVideoListContainer,
  StyledTitle,
  StyledVideoListWrapper,
  StyledDivider,
  StyledULTitle,
  StyledLeftButtonWrapper,
  StyledListWrapper,
  StyledVideoItemWrapper,
  StyledVideoListWrapperTwo
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
      <div style={{ marginBottom: space[3] }}>
        <Overdrive id="airbnb">
          <StyledTitle>Airbnb</StyledTitle>
        </Overdrive>
      </div>
      <StyledVideoListContainer>
        <StyledVideoListWrapperTwo>
          <div>
            <StyledVideoListWrapper>
              <StyledLeftButtonWrapper>
                <div style={{zIndex: '1000', position: 'relative'}}>
                  <CircleButton
                    width="28"
                    height="28"
                    fill={colors.grey03}
                    name="icon-arrow-left"
                  />
                </div>
              </StyledLeftButtonWrapper>
              <StyledVideoItemWrapper>
                <StyledULTitle>Sign up</StyledULTitle>
                <div style={{width: '100px'}}>
                  <ul>
                    {videoItems}
                  </ul>
                </div>
              </StyledVideoItemWrapper>
              <div style={{ paddingLeft: space[0], position: 'relative' }}>
                <CircleButton
                  width="28"
                  height="28"
                  fill={colors.grey03}
                  name="icon-arrow-right"
                />
              </div>
            </StyledVideoListWrapper>
          </div>
        </StyledVideoListWrapperTwo>
        <StyledDivider />
        <StyledListWrapper>
          <div>
            <List
              listItem="Confirm your email"
            />
          </div>
        </StyledListWrapper>
      </StyledVideoListContainer>
    </React.Fragment>
  )
};

export default VideoList;