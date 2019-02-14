import React from 'react';
import { colors } from '../../theme';

const IconUpRightArrow = (props) => {
  const width = props.width
  const height = props.height
  const fill = props.fill
  const title = props.name

  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 16 16" aria-labelledby={title} xmlns="http://www.w3.org/2000/svg">
      <path id="a" d="m1.669 10.743c-0.41051 0.36946-1.0428 0.33618-1.4123-0.074329-0.36946-0.41051-0.33618-1.0428 0.074329-1.4123l10-9c0.41051-0.36946 1.0428-0.33618 1.4123 0.074329 0.36946 0.41051 0.33618 1.0428-0.074329 1.4123l-10 9zm8.331-8.7433h-5c-0.55228 0-1-0.44772-1-1s0.44772-1 1-1h6c0.55228 0 1 0.44772 1 1v6c0 0.55228-0.44772 1-1 1s-1-0.44772-1-1v-5z"/>
    </svg>
      )
    };
    
IconUpRightArrow.defaultProps={
  width: '16',
  height: '16',
  fill: `${colors.black}`,
  title: "title"
}
    
export default IconUpRightArrow;