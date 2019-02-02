import React from 'react';
import { colors } from '../../theme';

const IconLeftArrow = (props) => {
  const width = props.width
  const height = props.height
  const fill = props.fill
  const title = props.title

  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 12 20" aria-labelledby={title} xmlns="http://www.w3.org/2000/svg">
      <path transform="matrix(-1 0 0 -1 70 74)" d="m58.331 55.743c-0.41051-0.36946-0.44379-1.0017-0.074329-1.4123 0.36946-0.41051 1.0017-0.44379 1.4123-0.074329l10 9c0.44138 0.39724 0.44138 1.0893 0 1.4866l-10 9c-0.41051 0.36946-1.0428 0.33618-1.4123-0.074329-0.36946-0.41051-0.33618-1.0428 0.074329-1.4123l9.1741-8.2567z" />
    </svg>
  )
};

IconLeftArrow.defaultProps={
  width: '16',
  height: '16',
  fill: `${colors.black}`,
  title: "title"
}

export default IconLeftArrow;