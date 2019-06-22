import * as React from 'react';
import {Svg} from 'react-sketchapp';
const {Path} = Svg;


export const ButtonArrowRight= props => (
    <Svg width={11} height={18} {...props}>
      <Path
        d="M8.82 10.848l-6.615 6.646a.899.899 0 0 1-.47.147.638.638 0 0 1-.411-.147L.147 16.316a.626.626 0 0 1-.147-.41c0-.177.058-.324.147-.471l6.644-6.616L.147 2.204A.883.883 0 0 1 0 1.735c0-.176.058-.295.147-.411L1.324.146A.637.637 0 0 1 1.735 0c.176 0 .323.059.47.146L8.82 6.791l2.029 2.028-2.029 2.029z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  )

export  const ButtonArrowLeft = props => (
    <Svg width={11} height={18} {...props}>
      <Path
        d="M2.029 10.848l6.615 6.646a.899.899 0 0 0 .47.147c.177 0 .295-.06.411-.147l1.177-1.178a.626.626 0 0 0 .147-.41.882.882 0 0 0-.147-.471L4.058 8.819l6.644-6.615a.883.883 0 0 0 .147-.469.629.629 0 0 0-.147-.411L9.525.146A.637.637 0 0 0 9.114 0a.898.898 0 0 0-.47.146L2.029 6.791 0 8.819l2.029 2.029z"
        fill="#FFF"
        fillRule="evenodd"
      />
    </Svg>
  )
  
