import * as React from 'react';
import {Text, View, makeSymbol } from 'react-sketchapp';
import { useDocument } from '../../context/DocumentContext';

const P = ({children='',style={},name=''}:any)=>{
    const [state]:any = useDocument();
    const fontSize = state.width <=320 ? 10: 14;

   return (<Text 
        name={name} 
        style={{fontSize,...style}} 
        >{children}</Text>)
}
export default P