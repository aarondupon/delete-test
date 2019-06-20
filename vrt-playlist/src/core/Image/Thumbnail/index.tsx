import React from 'react'
import { Image,Document,StyleSheet,render as renderSketchApp, Page, Artboard, Text, View, makeSymbol } from 'react-sketchapp';

const Thumbnail = (props?) => (
    <Image
      resizeMode="none"
    //   name="Photo"
      source="https://pbs.twimg.com/profile_images/895665264464764930/7Mb3QtEB_400x400.jpg"
      style={{ width: 100, height: 100 }}
      {...props}
    />
  );

  
  const ThumbnailSym:any = makeSymbol(Thumbnail,'Thumbnail');
  export default Thumbnail;