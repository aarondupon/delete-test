import React from 'react'
import {Svg,makeSymbol} from 'react-sketchapp'
import styled, {css} from 'styled-components/primitives';
import HBox from '../Layout/HBox';
import { ButtonArrowLeft, ButtonArrowRight } from '../Button/ArrowButton';
import { useDocument } from '../../context/DocumentContext';

const BoxView = styled.View`
    width:100%;
    padding:5px 0%; 
    height:50px;
`;

const RoundedBox = styled.View`
  width: ${props=>props.width};
  /* height:50px; */
  border-radius: ${props=>props.borderRadius || 14}px;
  margin: 0px 0px 0px 0px;
  background-color: ${props => props.hex};
  vertical-align:middle;
  align-items: center;
  justify-content: center;
`;

const HBoxView = styled.View`
  width:100%;
  padding:0;
  margin:0;
  flex-direction:row;
  vertical-align:middle;
  align-items: center;
  justify-content: center;
  height:60px;

`;

const Text = styled.Text`
    left:10;
    font-size:16;
    width:100%;
    font-weight: bold;
    color: ${props=>props.hex};
`;

const SvgComponent = props => {
return(
<BoxView >
  <HBoxView   style={{ marginLeft:'10%',width:'80%'}}>
    <RoundedBox borderRadius={40} hex="#2496CD" width={'100%'}>
    <HBox style={{padding:5}}>
      <ButtonArrowLeft style={{paddingLeft:10}} />
      <Text hex={"#ffffff"}> {'18 min Limburgse gerecht onderzoekt amateurvoetbalclubs en verenigingen: "Ze worden misbruikt om geld wit te wassen"'}</Text>
      <ButtonArrowRight style={{position:'absolute',marginTop:5,right:10}} />
      </HBox>
    </RoundedBox>
  </HBoxView>
</BoxView>
  
)}

makeSymbol(SvgComponent,'Banner');
export default SvgComponent;
