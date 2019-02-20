import React from 'react';

import {StyledLiTag, 
        StyledButton} from './style';

const VideoListItem = (props) => {
  const video = props.video
  const onUserSelected = props.onUserSelected
  const play = props.play

  return (
    <StyledLiTag onClick={() => onUserSelected(video, play)}>
      <StyledButton play={play}>
        {video.title}
      </StyledButton>
    </StyledLiTag>
  )
};

export default VideoListItem;