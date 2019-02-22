import React from 'react';

import {StyledLiTag, 
        StyledButton} from './style';

const VideoListItem = (props) => {
  const video = props.video
  const onUserSelected = props.onUserSelected
  const index = props.index
  const play = index === props.active


  return (
    <StyledLiTag onClick={() => onUserSelected(video, index)}>
      <StyledButton play={play}>
        {video.title}
      </StyledButton>
    </StyledLiTag>
  )
};

export default VideoListItem;