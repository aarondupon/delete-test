import React from 'react'
// import Svg, { G, Path, Text, TSpan } from 'react-native-'
import {Svg,Text, View} from 'react-sketchapp'
import styled, {css} from 'styled-components/primitives';
import DocumentContext, { useDocument } from '../../context/DocumentContext';

const {Path,G,TSpan} = Svg;

const BoxView = styled.View`
    width:100%;
    background:#E6E6E6;
    padding:5px 0%;
    
`;

const RoundedBox = styled.View`

  width: ${props=>props.width};
  height:100%;
  /* vertical-align:middle; */
  /* padding: 0px 10px; */
  border-radius: ${props=>props.borderRadius || 14}px;
  ${props => props.childIndex === 'first' && css`
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  `}
  ${props => props.childIndex === 'middle' && css`
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-right-radius: 0px;
  `}
 ${props => props.childIndex === 'last' && css`
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
  `}
 
 
  margin: 0px 0px 0px 0px;
  background-color: ${props => props.selected ? '#5DFC71' : (props.hex || '#F2F2F2')};
  vertical-align:middle;
  align-items: center;
  justify-content: center;
`;

const HBoxView = styled.View`
    width:100%;
    padding:0;margin:0;
    /* width:320; */
    flex-direction:row;
    vertical-align:middle;
  align-items: center;
  justify-content: center;
`;

const ButtonClose = props => (
    <Svg width={38} height={48} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path
          d="M0 0h15.09C28.295 0 38 9.705 38 22.911v.178C38 36.295 28.295 48 15.09 48H0"
          fill="#2496CD"
        />
        <Path
          d="M20.059 25l6.613 6.616c.09.148.148.294.148.471a.62.62 0 0 1-.148.41l-1.175 1.178a.581.581 0 0 1-.411.147.884.884 0 0 1-.47-.147l-6.586-6.646-6.616 6.646a.884.884 0 0 1-.47.147.632.632 0 0 1-.41-.147l-1.177-1.178a.625.625 0 0 1-.148-.41c0-.177.059-.323.148-.471L16 25l-6.643-6.614a.89.89 0 0 1-.148-.47.63.63 0 0 1 .148-.411l1.177-1.178a.636.636 0 0 1 .41-.145.89.89 0 0 1 .47.145l6.616 6.646 6.615-6.646a.9.9 0 0 1 .47-.145c.176 0 .294.058.412.145l1.177 1.178a.64.64 0 0 1 .146.411.906.906 0 0 1-.146.47L20.059 25z"
          fill="#FFF"
        />
      </G>
    </Svg>
  )



const SvgComponent = props => {
  // const [state] = useDocument()
  return(
<BoxView style={{height:60, alignContent:"center"}}>
  <HBoxView   style={{ marginLeft:'10%',width:'80%'}}>
    <RoundedBox borderRadius={40} hex="#fff" childIndex="first" width={'100%'}>
      <Text style={{position:"absolute",left:10}}>{'Vul een zoekterm in'}</Text>
    </RoundedBox>
    <ButtonClose/>
  </HBoxView>
</BoxView>
  
)}

export default SvgComponent
