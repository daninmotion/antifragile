import React from 'react';
import IconLeftArrow from './IconLeftArrow';
import IconRightArrow from './IconRightArrow';

const SVGIcon = (props) => {
  switch(props.name) {
    case "icon-arrow-left":
      return <IconLeftArrow {...props} />
    case "icon-arrow-right":
      return <IconRightArrow {...props} />
    default:
      return <div />;
  }
};

export default SVGIcon;