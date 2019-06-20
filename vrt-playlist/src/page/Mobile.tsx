import * as React from 'react';
import { render as renderSketchApp, Page, Artboard, Text, View } from 'react-sketchapp';
import { DocumentContextProvider } from '../context/DocumentContext';

export default ({ children }:any) => (
  <Page>
    <DocumentContextProvider initialState={{width:320,height:320}} >
    {children}
    </DocumentContextProvider>
  </Page>
);

