import * as React from 'react';
import {Text, View, makeSymbol } from 'react-sketchapp';
import styled, {css} from 'styled-components/primitives';
import VBox from './../../../core/Layout/VBox';
import HBox from './../../../core/Layout/HBox';
import PodcastIconSvg from './../../../core/svg/podcastIconSvg';
import CloseIconSvg from './../../../core/Svg/CloseIconSvg';
import DragItemIconSvg from './../../../core/Svg/DragItemIconSvg';
import MoreIconSvg from './../../../core/Svg/MoreIconSvg';
import Album from './../../../core/Album';
import { MenuButtonLeftSelected } from '../../../core/Buttons/MenuButton';
import { useDocument } from '../../../context/DocumentContext';
import P from '../../../core/Text/P';

// const P = styled.Text`
//     font-size:${(props)=>props.isMobile ? 11 : 14}px;
// `


const StyledHBox = styled(HBox)`
    background:${(props={hover:false})=>props.hover ? '#F2F2F2':'#ffffff'};
`


export default function index({hover,edit}:any) {
    const [state]:any = useDocument();
    const isMobile = state.width <=320;

    return (
<VBox>
                  <StyledHBox hover={hover} >
                  <Album hover={hover}  width={state.width <=320 ? 50 : 100} />
                  <VBox style={{paddingLeft:5,paddingTop:5}}>
                    <P >{'do 06 jun 05:45'}</P>
                    <HBox style={{background:'#fff'}}>
                      <MenuButtonLeftSelected/>
                      <P style={{marginTop:5,marginLeft:10}}>{'Podvia #17'}</P>
                    </HBox>
                    <P>{'Maakt massatoerisme de wereld onleefbaar?'}</P>
                  </VBox>
                  </StyledHBox>
                  <View style={{position:"absolute",top:20,right:0}}>
                    <HBox style={{paddingRight:10}}>
                  
                      {
                        
                        edit 
                        ? <React.Fragment>
                          <CloseIconSvg/>
                         {!isMobile &&  <View style={{width:10}}/>}
                         {!isMobile &&    <PodcastIconSvg/>}
                         
                        <View style={{width:10}}/>
                            <P style={{width:'auto',align:'right', marginTop:2}}>{'20 min'}</P>
                        <View style={{width:10}}/>
                        
                        <DragItemIconSvg style={{marginTop:2}}/>
                      </React.Fragment>
                      
                      :<React.Fragment>
                          <P style={{width:'auto',align:'right', marginTop:2}}>{'20 min'}</P>
                          <View style={{width:10}}/>
                          <PodcastIconSvg/>
                          <View style={{width:10}}/>
                          <MoreIconSvg style={{marginTop:6}}/>
                        </React.Fragment>
                      }
                    </HBox>
                  </View>
                
                </VBox>
    )
}
