import * as React from 'react';
import { makeSymbol,Text } from 'react-sketchapp';
import Label from './components/Label';
import ButtonView from './components/ButtonView';

export default ()=>
  <ButtonView>
  <Label>{'no name'}</Label>
  </ButtonView>

export const MenuButtonMiddle = (props)=>
  <ButtonView selected={props.selected} childIndex={'middle'} >
  <Label selected={props.selected} name="label" >{props.label || 'no name'}</Label>
  </ButtonView>
  makeSymbol(MenuButtonMiddle,'MenuButtonMiddle')

export const MenuButtonLeft = (props)=>
<ButtonView  selected={props.selected} childIndex={'first'} >
<Label selected={props.selected} name="label" >{props.label || 'no name'}</Label>
</ButtonView>  
// makeSymbol(MenuButtonLeft,'MenuButtonLeft')

export const MenuButtonRight = (props)=>
  <ButtonView  selected={props.selected} childIndex={'last'} >
  <Label selected={props.selected} name="label" >{props.label || 'no name'}</Label>
  </ButtonView>
  // makeSymbol(MenuButtonRight,'MenuButtonRight')

export const MenuButtonMiddleSelected = (props)=>
  <ButtonView selected childIndex={'middle'} style={props.style} >
  <Label selected name="label"  style={props.fontSize}>{props.label || 'no name'}</Label>
  </ButtonView>
  // makeSymbol(MenuButtonMiddleSelected,'MenuButtonMiddleSelected')

export const MenuButtonLeftSelected = (props)=>
<ButtonView selected childIndex={'first'} >
<Label selected name="label" >{props.label || 'no name'}</Label>
</ButtonView>

// makeSymbol(MenuButtonLeftSelected,'MenuButtonLeftSelected')

export const MenuButtonRightSelected = (props)=>
  <ButtonView  selected childIndex={'last'} >
  <Label selected name="label" >{props.label || 'no name'}</Label>
  </ButtonView>
  
  // makeSymbol(MenuButtonRightSelected,'MenuButtonRightSelected')

export const MenuButtonText = (props)=>
  <ButtonView hex={'#FFFFFF'}>
  <Label>{'Wijzigen'}</Label>
  </ButtonView>
  
  // makeSymbol(MenuButtonText,'MenuButtonText')

 