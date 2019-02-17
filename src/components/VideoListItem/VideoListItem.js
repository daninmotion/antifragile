import React from 'react';

import {StyledLiTag, 
        StyledButton} from './style';

const VideoListItem = (props) => {
  const video = props.video
  const onUserSelected = props.onUserSelected

  const isPlaying = props.play
  return (
    <StyledLiTag onClick={() => onUserSelected(video)}>
      <StyledButton play={!isPlaying}>
        {video.title}
      </StyledButton>
    </StyledLiTag>
  )
};

export default VideoListItem;