//  @ts-ignore-file
import React from 'react';
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use } = Svg;

const SvgComponent = props => (
  <Svg width={31} height={16} {...props}>
    <Path
      stroke="gray"
      strokeWidth={5}
      d="M2 3.328l13.241 8.998L28.965 3"
      fill="none"
      fillRule="evenodd"
    />
  </Svg>
)


export default SvgComponent

