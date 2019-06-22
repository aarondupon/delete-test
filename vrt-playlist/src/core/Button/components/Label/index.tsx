import * as React from 'react';
import styled, {css} from 'styled-components/primitives';
import { useDocument } from '../../../../context/DocumentContext';

const Text = styled.Text`
      font-size:${props=>props.fontSize};
      color:${props=>props.selected ? '#ffffff' : '#666666'};
`

const Label = ({name="",children='',selected=false,style={}} ) =>{
    const document:any = useDocument();
    const fontSize = document[0] && document[0].width <=320 ? 10: 16;
   return(<Text selected={selected} {...style}>{children}</Text>)
  }

export default Label;