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
  StyledULTitle
} from './style';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem
        key={video.id}
        video={video}
        onUserSelected={props.onVideoSelect}
        play={props.playHandler}
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
        <div style={{ maxWidth: '600px' }}>
          <div>
            <StyledVideoListWrapper>
              <div style={{ marginRight: space[5] }}>
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
                <StyledULTitle>Sign up while booking</StyledULTitle>
                <ul>
                  {videoItems}
                </ul>
              </div>
              <div style={{ paddingLeft: space[0] }}>
                <CircleButton
                  width="28"
                  height="28"
                  fill={colors.grey03}
                  name="icon-arrow-right"
                />
              </div>
            </StyledVideoListWrapper>
          </div>
        </div>
        <StyledDivider />
        <div style={{maxWidth: '600px'}}>
          <div style={{ marginLeft: space[5] }}>
            <List
              listItem="Problem with ID"
            />
          </div>
        </div>
      </StyledVideoListContainer>
    </React.Fragment>
  )
};

export default VideoList;