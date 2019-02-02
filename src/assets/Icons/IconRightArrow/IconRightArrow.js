import React from 'react';
import { colors } from '../../../theme';

const IconRightArrow = (props) => {
  const width = props.width
  const height = props.height
  const fill = props.fill

  return (
    <svg widht={width} height={height} fill={fill} viewBox="0 0 12 20" xmlns="http://www.w3.org/2000/svg">
      <path id="a" d="M8.331 5.743a1 1 0 0 1 1.338-1.486l10 9a1 1 0 0 1 0 1.486l-10 9a1 1 0 1 1-1.338-1.486L17.505 14 8.331 5.743z"/>
    </svg>
  )
};

IconRightArrow.defaultProps={
  width: '16',
  height: '16',
  fill: `${colors.black}`
}

export default IconRightArrow;