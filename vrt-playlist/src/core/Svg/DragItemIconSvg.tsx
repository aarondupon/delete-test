//  @ts-ignore-file
import React from 'react';
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use } = Svg;

const SvgComponent = props => (
  <Svg width={25} height={14} {...props}>
    <G fill="#666" fillRule="evenodd">
      <Path d="M0 2h25V-.001H0zM0 8h25V6H0zM0 14h25v-2H0z" />
    </G>
  </Svg>
)


export default SvgComponent

