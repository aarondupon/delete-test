import { getPage } from "./utils";
import { render as renderSketchApp } from 'react-sketchapp';

/** HACK for multipage support in Sketch */
const render = (document: any[] | any, context: any) => {
  console.log('render: skech')
    var data: any = context.document.documentData();
    var pages = context.document.pages();
    var data: any = context.document.documentData();
    
    // selects sketch Page by given page name 
    const renders = (Array.isArray(document) ? document : [document]).map(C => {
      var page = getPage(pages, C.props.name);
      console.log('page',page)
      data.setCurrentPage(page);
      return renderSketchApp(C, page);
    });
  
    return renders;
  };

export default render;