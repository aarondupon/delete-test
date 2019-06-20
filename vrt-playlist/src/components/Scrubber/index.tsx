
//  @ts-ignore-file
import React from 'react';
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use } = Svg;

const SvgComponent = props => (
    <Svg width={288} height={18} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path fill="#E6E6E6" d="M18 7h270v4H18z" />
        <Path fill="#5DFC71" d="M0 7h94v4H0z" />
        <Path
          d="M100.916 8.957A8.958 8.958 0 0 0 91.958 0 8.958 8.958 0 0 0 83 8.957a8.96 8.96 0 0 0 8.958 8.959 8.96 8.96 0 0 0 8.958-8.959"
          fill="#5DFC71"
        />
      </G>
    </Svg>
  )


export default SvgComponent



  