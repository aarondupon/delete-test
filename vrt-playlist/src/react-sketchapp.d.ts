/// <reference types="node" />
/// <reference types="react" />

declare namespace NodeJS {
    interface ProcessEnv {
      readonly NODE_ENV: 'development' | 'production' | 'test';
      readonly PUBLIC_URL: string;
    }
  }
  
  declare module '*.bmp' {
    const src: string;
    export default src;
  }
  
  declare module '*.gif' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpg' {
    const src: string;
    export default src;
  }
  
  declare module '*.jpeg' {
    const src: string;
    export default src;
  }
  
  declare module '*.png' {
    const src: string;
    export default src;
  }
  
  declare module '*.webp' {
      const src: string;
      export default src;
  }
  
  declare module '*.svg' {
    import * as React from 'react';
  
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  
    const src: string;
    export default src;
  }
  
  declare module '*.module.css' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  declare module '*.module.sass' {
    const classes: { [key: string]: string };
    export default classes;
  }
  
  
  declare module '*.glsl';
  declare module '*.frag';
  declare module '*.vert';
// import React from "react";

// declare module 'react-sketchapp';

// declare namespace JSX {

//     interface IntrinsicElements {
//         [elemName: string]: any;
//         // Page:ReactElement;
//     }
// }


// /**
//  * PageProps, a Page takes optionally a name and children as props
//  */
// export interface PageProps {
//     name?: string;
//     children?: React.ReactNode[] | React.ReactNode;
// }
// export class Page extends React.Component<PageProps, any> {}


