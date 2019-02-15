import React from 'react';

const VideoListItem = (props) => {
  const video = props.video
  const onUserSelected = props.onUserSelected
  return (
    <li onClick={() => onUserSelected(video)}>
      {video.title}
    </li>
  )
};

export default VideoListItem;