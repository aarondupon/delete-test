import React, { useContext, useEffect } from 'react';
import {
  Image,
  StyleSheet,
  render as renderSketchApp,
  Page,
  Artboard,
  Text,
  View,
  makeSymbol,
} from 'react-sketchapp';
import chroma from 'chroma-js';
import CornerIconSvg from '../Svg/CornerIconSvg';
import DocumentContext, {
  useDocument,
  DocumentContextConsumer,
} from '../../context/DocumentContext';
import Thumbnail from '../Image/Thumbnail';

const Album = ({width=100,hover}) => {
//   const [state]: any = useContext(DocumentContext);

  return (
    <View name="Multi" style={{ padding: 10,minWidth:width}}>
      <Thumbnail  style={{width:width,height:width}}  />
      <CornerIconSvg hover={hover} style={{ position: 'absolute', bottom: -2, left: -2 }} />
    </View>
  );
};
// makeSymbol(Album,'Album');
export default Album;
