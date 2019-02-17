import React, {Component} from 'react';

class VideoDetail extends Component {
  render() {
  
  const video = this.props.video;
  const url = video.url
  const id = video.id
  const iframe = <iframe src={url} title="video" key={id} allowtransparency="true" frameBorder="0" scrolling="no" name="wistia_embed" width="100%" height="500"></iframe>

  if(!video) {
    return <div>Loading...</div>
  }
    return (
      <React.Fragment>
        <div style={{width: '100%', height: 'auto'}}>
          {iframe}
        </div>
      </React.Fragment>
    )
  }
};

export default VideoDetail
