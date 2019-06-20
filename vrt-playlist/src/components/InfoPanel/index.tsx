//  @ts-ignore-file
import React from 'react';
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use , TSpan ,Text} = Svg;

const SvgComponent = props => (
    <Svg width={288} height={137} {...props}>
      <Defs>
        <Path  d="M0 0h127v23H0z" />
        <Path  d="M0 23h127V0H0z" />
      </Defs>
      <G fill="none" fillRule="evenodd">
        <Text
          fontFamily="LucidaGrande, Lucida Grande"
          fontSize={18}
          letterSpacing={-0.108}
          fill="#000"
          transform="translate(-13 -303)"
        >
          <TSpan x={13} y={411}>
            {'A'}
          </TSpan>
          <TSpan x={25.311} y={411}>
            {'nne '}
          </TSpan>
          <TSpan x={63.376} y={411} letterSpacing={-0.882}>
            {'V'}
          </TSpan>
          <TSpan x={74.263} y={411}>
            {'an'}
          </TSpan>
          <TSpan x={95.374} y={411} letterSpacing={-0.126}>
            {'r'}
          </TSpan>
          <TSpan x={102.613} y={411}>
            {'e'}
          </TSpan>
          <TSpan x={112.642} y={411}>
            {'n'}
          </TSpan>
          <TSpan x={123.705} y={411} letterSpacing={-0.09}>
            {'t'}
          </TSpan>
          <TSpan x={130.347} y={411}>
            {'e'}
          </TSpan>
          <TSpan x={140.375} y={411} letterSpacing={-0.144}>
            {'r'}
          </TSpan>
          <TSpan x={147.597} y={411}>
            {'ghem'}
          </TSpan>
        </Text>
        <Text
          fontFamily="LucidaGrande, Lucida Grande"
          fontSize={14}
          fill="#A9A9A9"
          transform="translate(-13 -303)"
        >
          <TSpan x={13} y={433}>
            {'do 06 jun 05:45'}
          </TSpan>
        </Text>
        <Text
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={24}
          fontWeight="bold"
          fill="#000"
          transform="translate(-13 -303)"
        >
          <TSpan x={13} y={379}>
            {'Podvis #17:'}
          </TSpan>
        </Text>
        <Text
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={24}
          fontWeight="bold"
          fill="#000"
          transform="translate(-13 -303)"
        >
          <TSpan x={13} y={350}>
            {'Maakt massatoerisme de '}
          </TSpan>
        </Text>
        <Text
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={24}
          fontWeight="bold"
          fill="#000"
          transform="translate(-13 -303)"
        >
          <TSpan x={14} y={321}>
            {'wereld onleefbaar?'}
          </TSpan>
        </Text>
        <G transform="translate(161 134)">
 
          {/* <Path
            d="M127 11.679c0 6.253-5.068 11.32-11.321 11.32H11.321C5.068 23 0 17.933 0 11.68v-.357C0 5.069 5.068 0 11.321 0h104.358C121.932 0 127 5.069 127 11.322v.357z"
            fill="#2496CD"
          />

          <Text
            fontFamily="Helvetica"
            fontSize={14}
            fill="#FFF"
          >
            <TSpan x={16} y={15.22}>
              {'Lees meer'}
            </TSpan>
          </Text>
          <Path
            stroke="#FFF"
            d="M106.535 9.09l6.239 6.24 6.2-6.24"
          /> */}
        </G>
      </G>
    </Svg>
  )


export default SvgComponent