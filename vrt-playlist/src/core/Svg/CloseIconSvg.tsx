//  @ts-ignore-file
import React from 'react';
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use } = Svg;

const SvgComponent = props => (
  <Svg width={22} height={22} {...props}>
    <G fill="none" fillRule="evenodd">
      <Path
        d="M22 11c0-6.076-4.926-11-11-11S0 4.924 0 11s4.926 11 11 11 11-4.924 11-11"
        fill="red"
      />
      <Path
        fill="#FFF"
        d="M5.763 7.785L7.8 5.748l3.198 3.2 3.2-3.2 2.053 2.053-3.2 3.201 3.2 3.197-2.037 2.038-3.2-3.2-3.214 3.215L5.748 14.2l3.215-3.215z"
      />
    </G>
  </Svg>
)

export default SvgComponent

