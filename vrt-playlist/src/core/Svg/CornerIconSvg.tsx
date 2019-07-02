//  @ts-ignore-file
import React from 'react';
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use } = Svg;

const ConnerIconSvg = props => {
  const {hover} = props;
  return(
  <View style={{ paddingTop: 10 }}>
    <Svg width={34} height={35} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M34 34.25C34 15.473 19 0 0 0v33.5l34 .75z" fill={hover ? "#f2f2f2" : "#ffffff"} />
        <Path fill="#5DFC71" d="M8 19.46v-8.848l8.338 4.425 8 4.424-8.169 4.424L8 28.31z" />
      </G>
    </Svg>
  </View>
)};

export default ConnerIconSvg;
