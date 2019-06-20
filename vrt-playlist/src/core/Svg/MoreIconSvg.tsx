//  @ts-ignore-file
import React from 'react'
import { Svg} from 'react-sketchapp'
const {Defs, Path, G, Use } = Svg;
const SvgComponent = props => (
    <Svg  width={20} height={6} {...props}>
      <Defs>
        <Path d="M0 .322h5.678V6H0z" />
        <Path  d="M0 .322h5.678V6H0z" />
        <Path  d="M0 .322h5.678V6H0z" />
        
      </Defs>
      <G fill="none" fillRule="evenodd">
        <G transform="translate(0 -.322)">
          
          <Path
            d="M2.84.322a2.84 2.84 0 1 0 0 5.68 2.84 2.84 0 0 0 0-5.68"
            fill="#999"
          />
        </G>
        <G transform="translate(7 -.322)">
          
          <Path
            d="M2.84.322a2.84 2.84 0 1 0 0 5.68 2.84 2.84 0 0 0 0-5.68"
            fill="#999"
           
          />
        </G>
        <G transform="translate(14 -.322)">
         
          <Path
            d="M2.84.322a2.84 2.84 0 1 0 0 5.68 2.84 2.84 0 0 0 0-5.68"
            fill="#999"
           
          />
        </G>
      </G>
    </Svg>
)

export default SvgComponent
