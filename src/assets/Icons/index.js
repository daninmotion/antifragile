import React from 'react';
import IconLeftArrow from './IconLeftArrow';
import IconRightArrow from './IconRightArrow';
import IconUpRightArrow from './IconUpRightArrow';

const SVGIcon = (props) => {
  switch(props.name) {
    case "icon-arrow-left":
      return <IconLeftArrow {...props} />
    case "icon-arrow-right":
      return <IconRightArrow {...props} />
    case "icon-arrow-up-right":
      return <IconUpRightArrow {...props} />
    default:
      return <div />;
  }
};

export default SVGIcon;