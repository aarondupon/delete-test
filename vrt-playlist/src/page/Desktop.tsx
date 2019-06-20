import React ,{useContext,useEffect} from 'react';
import { render as renderSketchApp, Page, Artboard, Text, View } from 'react-sketchapp';
import { DocumentContextProvider } from './../context/DocumentContext'


export default ({ children ,...props }:any) => {
  return(
   
    <Page>
    <DocumentContextProvider initialState={{width:1366,height:768}} >
    {children}
    </DocumentContextProvider>
  </Page> 
  
)};

