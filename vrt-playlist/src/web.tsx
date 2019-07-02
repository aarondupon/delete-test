import * as React from 'react';
import NavigationBar from './components/NavigationBar'
import { AppRegistry, StyleSheet, View ,Text,Image} from 'react-native-web';
import Svg from 'react-native-svg-web';
import { MenuButtonLeft } from './core/Button/MenuButton';
import { DocumentContextProvider } from './context/DocumentContext';
import { makeSymbol } from 'react-sketchapp';
import styled, {css} from 'styled-components/primitives';

const reactSketchapp = require('react-sketchapp');
reactSketchapp.Image = Image;

let Div  = styled('div')`
  
`
reactSketchapp.View = ({children, ...props})=>{
if(props.style.display) props.style.display = 'flex';

return (<div  {...props}>{children}</div>)
};

reactSketchapp.Text = Text;
reactSketchapp.Svg = Svg;
const Page = styled.View`
  width:${props=>props.width}px;
  height:auto;
  background-color: #f9f9f9;
  
`

reactSketchapp.Page = Page;
const Artboard = styled.View`
  overflow:hidden;
  background-color:#ffffff;
  border:solid 1px rgba(0,0,0,0.1);
  margin-left:50%;
  transform:translateX(-${props=>props.style.width/2}px);
  box-shadow: 0px 0px 5px rgba(0,0,0,0.4);
`;

reactSketchapp.Artboard = props=>
  <div data-name="page">
    <div style={{position:'relative',left:'50%',marginLeft:-props.style.width/2,width:props.style.width,padding:10}}>{props.name}</div>
    <Artboard {...props} />
  </div>;
/** overrides */
require('react-sketchapp').makeSymbol = (comp) => comp;




let {commands} = require('./my-command') ;



class App extends React.Component {
  render() {
    return(commands)
  }
}

AppRegistry.registerComponent('App', () => App);
AppRegistry.runApplication('App', { rootTag: document.getElementById('react-root') });