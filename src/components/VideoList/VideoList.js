import React from 'react';
import VideoListItem from '../VideoListItem/VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map((video) => {
    return (
      <VideoListItem 
        key={video.id}
        video={video}
        onUserSelected={props.onVideoSelect}
      />
    )
  });

  return (
    <ul>
      {videoItems}
    </ul>
  )
};

export default VideoList;