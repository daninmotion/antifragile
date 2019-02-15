import React from 'react';

const VideoDetail = (props) => {
  const video = props.video;

  if(!video) {
    return <div>Loading...</div>
  }
  
  const url = video.url
  return (
    <React.Fragment>
      <div style={{width: '100%', height: 'auto'}}>
        <iframe src={url} title="video" allowtransparency="true" frameBorder="0" scrolling="no" name="wistia_embed" width="100%" height="500"></iframe>
      </div>
    </React.Fragment>
  )
};

export default VideoDetail
