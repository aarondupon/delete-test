import React from 'react'
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use, Text,TSpan } = Svg;

const SvgComponent = props => (
    <Svg width={244} height={26} {...props}>
      <Defs>
        <Path d="M0 0h243.637v25.275H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Text
          fontFamily="Helvetica"
          fontSize={13}
          letterSpacing={-0.234}
          fill="#000"
        >
          <TSpan x={32.637} y={18.617}>
            {'T'}
          </TSpan>
          <TSpan x={40.115} y={18.617}>
            {'OEVOEGEN'}
          </TSpan>
          <TSpan x={114.522} y={18.617} letterSpacing={-0.715} />
          <TSpan x={116.708} y={18.617}>
            {'AAN MIJN PL'}
          </TSpan>
          <TSpan x={200.504} y={18.617} letterSpacing={-0.962}>
            {'A'}
          </TSpan>
          <TSpan x={207.254} y={18.617}>
            {'YLIST'}
          </TSpan>
        </Text>
        <Path
          d="M25.275 12.638C25.275 5.658 19.617 0 12.637 0 5.658 0 0 5.659 0 12.638s5.658 12.638 12.637 12.638c6.98 0 12.638-5.66 12.638-12.638"
          fill="#000"
        />
        <Path
          fill="#FFF"
          d="M6.317 14.045v-2.926h4.595V6.524h2.948v4.595h4.595v2.926H13.86v4.617h-2.948v-4.617z"
        />
      </G>
    </Svg>
  )


export default SvgComponent
  