import React from 'react';
import { colors } from '../../theme';

const IconRightArrow = (props) => {
  const width = props.width
  const height = props.height
  const fill = props.fill
  const title = props.title

  return (
    <svg width={width} height={height} fill={fill} viewBox="0 0 12 20" aria-labelledby={title} xmlns="http://www.w3.org/2000/svg">
      <path d="M0.331035268,1.74329415 C-0.0794747532,1.37383513 -0.112753166,0.74154529 0.256705854,0.331035268 C0.626164873,-0.0794747532 1.25845471,-0.112753166 1.66896473,0.256705854 L11.6689647,9.25670585 C12.1103451,9.65394818 12.1103451,10.3460518 11.6689647,10.7432941 L1.66896473,19.7432941 C1.25845471,20.1127532 0.626164873,20.0794748 0.256705854,19.6689647 C-0.112753166,19.2584547 -0.0794747532,18.6261649 0.331035268,18.2567059 L9.50515288,10 L0.331035268,1.74329415 Z" id="path-1"></path>
    </svg>
  );
};

IconRightArrow.defaultProps = {
  width: '16',
  height: '16',
  fill: `${colors.black}`,
  title: "title"
}

export default IconRightArrow;
