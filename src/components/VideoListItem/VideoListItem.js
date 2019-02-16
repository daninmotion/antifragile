import React from 'react';

import {StyledLiTag, 
        StyledButton} from './style';

const VideoListItem = (props) => {
  const video = props.video
  const onUserSelected = props.onUserSelected
  return (
    <StyledLiTag onClick={() => onUserSelected(video)}>
      <StyledButton>
        {video.title}
      </StyledButton>
    </StyledLiTag>
  )
};

export default VideoListItem;