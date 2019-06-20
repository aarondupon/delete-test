import React from 'react'
import { Svg, View } from 'react-sketchapp';
const { Defs, Path, G, Use, Text,TSpan } = Svg;

const SvgComponent = props => (
    <Svg width={225} height={409} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path fill="#FFF" d="M0 409h225V0H0z" />
        <Text
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={18}
          fontWeight="bold"
          fill="#28A7D7"
        >
          <TSpan x={23.263} y={40.284}>
            {'Meest geluisterd'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#939DAD">
          <TSpan x={24.782} y={68.912}>
            {'BUITENLAND '}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={83.312}>
            {' Mensen met migra-'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={97.712}>
            {'tieachtergrond sturen dit jaar '}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={112.112}>
            {'490 miljard euro naar familie: '}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={126.512}>
            {'"Cruciale hulp voor ontwikke'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={175.778} y={126.512}>
            {'-'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={140.912}>
            {'lingslanden"'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#939DAD">
          <TSpan x={24.782} y={176.228}>
            {'POLITIEK'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={190.628}>
            {' Bilzen trekt opnieuw naar '}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={205.028}>
            {'de stembus. Hoe is het zover '}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={219.428}>
            {'kunnen komen? En wat staat '}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={233.828}>
            {'er op het spel?'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#939DAD">
          <TSpan x={24.782} y={269.348}>
            {'MUZIEK'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={283.748}>
            {'Metallica in het Boudewijnsta'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={179.534} y={283.748}>
            {'-'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={298.148}>
            {'dion: allesbehalve een duiv'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={169.55} y={298.148}>
            {'-'}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={312.548}>
            {'entil, met de W van '}
          </TSpan>
          <TSpan x={130.825} y={312.548} letterSpacing={-0.216}>
            {'W'}
          </TSpan>
          <TSpan x={141.724} y={312.548}>
            {'erchter '}
          </TSpan>
        </Text>
        <Text fontFamily="Helvetica" fontSize={12} fill="#1C375C">
          <TSpan x={24.782} y={326.948}>
            {'\xE9n met dank aan... Poperinge'}
          </TSpan>
        </Text>
        <Text
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={55.5}
          fontWeight="bold"
          fill="#69F884"
        >
          <TSpan x={178.95} y={143.026}>
            {'1'}
          </TSpan>
        </Text>
        <Text
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={55.5}
          fontWeight="bold"
          fill="#69F884"
        >
          <TSpan x={173.511} y={241.594}>
            {'2'}
          </TSpan>
        </Text>
        <Text
          fontFamily="Helvetica-Bold, Helvetica"
          fontSize={55.5}
          fontWeight="bold"
          fill="#69F884"
        >
          <TSpan x={173.511} y={331.449}>
            {'3'}
          </TSpan>
        </Text>
        <Path d="M25 157.5h177H25z" fill="#E6E6E6" />
        <Path d="M25 157.5h177" stroke="#E6E6E6" />
        <Path d="M25 256.5h177H25z" fill="#E6E6E6" />
        <Path d="M25 256.5h177" stroke="#E6E6E6" />
        <Path
          fill="#5DFC71"
          d="M27 79.96v-4.706l4.421 2.353 4.249 2.354-4.336 2.354L27 84.67zM27 186.96v-4.706l4.421 2.353 4.249 2.354-4.336 2.354L27 191.67z"
        />
      </G>
    </Svg>)


export default SvgComponent;