import React from 'react';

const Player = (props) => {
  return (
    <React.Fragment>
      <div style={{width: '100%', height: 'auto'}}>
        <iframe src={props.url} title="video" allowtransparency="true" frameBorder="0" scrolling="no" name="wistia_embed" width="100%" height="500"></iframe>
      </div>
    </React.Fragment>
  )
};

export default Player