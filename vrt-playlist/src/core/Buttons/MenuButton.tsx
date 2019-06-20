import * as React from 'react';
import * as PropTypes from 'prop-types';
import styled, {css} from 'styled-components/primitives';
import { makeSymbol,Text } from 'react-sketchapp';
import P from '../../core/Text/P'
import { useDocument } from '../../context/DocumentContext';

const ButtonView = styled.View`

  width: auto;
  padding: 0px 10px
  border-radius: 14px;
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
 
 
  margin: 4px 0px 4px 0px;
  background-color: ${props => props.selected ? '#5DFC71' : (props.hex || '#F2F2F2')};
  justify-content: center;
  align-items: center;
`;

// const Label = styled.Text`
//     color:${props=> props.selected ? '#ffffff' : '#666666'};


// `
const PP = ({children='',style={},name=''}:any)=>{
  // const [state]:any = useDocument();
  // const fontSize = state.width <=320 ? 10: 14;

 return (<Text name={name} style={{...style}} >{children}</Text>)
}
const Label = ({name="",children='',selected=false,style={}} ) =>{
  const document:any = useDocument();
  const fontSize = document[0] && document[0].width <=320 ? 10: 14;
 return(<PP  style={{
    fontSize,
    color:selected ? '#ffffff' : '#666666',
    ...style
  }}>{children}</PP>)
}
// const MenuButton = styled.View`
//   /* This renders the buttons above... Edit me! */
//   display: inline-block;
//   border-radius: 3px;
//   padding: 0.5rem 0;
//   margin: 0.5rem 1rem;
//   width: 11rem;
//   background: transparent;
//   color: white;
//   border: 2px solid white;

//   /* The GitHub button is a primary button
//    * edit this to target it specifically! */
//   ${props => props.primary && css`
//     background: white;
//     color: palevioletred;
//   `}
// `
export default ()=>
  <ButtonView>
  <Label>{'no name'}</Label>
  </ButtonView>

export const MenuButtonMiddle = (props)=>
  <ButtonView childIndex={'middle'} >
  <Label name="label" >{props.label || 'no name'}</Label>
  </ButtonView>
  makeSymbol(MenuButtonMiddle,'MenuButtonMiddle')

export const MenuButtonLeft = (props)=>
<ButtonView childIndex={'first'} >
<Label name="label" >{props.label || 'no name'}</Label>
</ButtonView>  
makeSymbol(MenuButtonLeft,'MenuButtonLeft')


export const MenuButtonRight = (props)=>
  <ButtonView  childIndex={'last'} >
  <Label name="label" >{props.label || 'no name'}</Label>
  </ButtonView>
  makeSymbol(MenuButtonRight,'MenuButtonRight')


export const MenuButtonMiddleSelected = (props)=>
  <ButtonView selected childIndex={'middle'} style={props.style} >
  <Label selected name="label"  style={props.fontSize}>{props.label || 'no name'}</Label>
  </ButtonView>
  makeSymbol(MenuButtonMiddleSelected,'MenuButtonMiddleSelected')

export const MenuButtonLeftSelected = (props)=>
<ButtonView selected childIndex={'first'} >
<Label selected name="label" >{props.label || 'no name'}</Label>
</ButtonView>

makeSymbol(MenuButtonLeftSelected,'MenuButtonLeftSelected')


export const MenuButtonRightSelected = (props)=>
  <ButtonView  selected childIndex={'last'} >
  <Label selected name="label" >{props.label || 'no name'}</Label>
  </ButtonView>
  
  makeSymbol(MenuButtonRightSelected,'MenuButtonRightSelected')