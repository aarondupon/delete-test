import React from 'react';
import {
  MenuButtonLeft,
  MenuButtonRight,
  MenuButtonText,
  MenuButtonMiddle,
} from '../../core/Button/MenuButton';
import HBox from '../../core/Layout/HBox';
import { View, Text } from 'react-sketchapp';
import HearIconSvg from '../../core/Svg/HearIconSvg';

const NavigationBar = (props) => (
  <View
    style={{
      padding: 0,
      marginTop: 10,
      marginLeft: 120,
      width: 320,
      height: 26,
      flexDirection: 'row',
      ...props.style,
    }}

    
  >
   
    <MenuButtonLeft selected={props.selectedIndex === 0} label={'Home'} />}
    <MenuButtonMiddle selected={props.selectedIndex === 1} label={'Playlist'} />
    <MenuButtonRight selected={props.selectedIndex === 2}  label={'Smart Radio'} />
    <MenuButtonText label={props.edit ? '< Terug' :  'Wijzigen'} />
    <HBox style={{ position: 'absolute', width: 350, left: 1366 - 450, marginTop: 2 }}>
      <HearIconSvg />
      <View style={{ width: 10 }} />
      <Text>{props.buttonRightTitle}</Text>
    </HBox>
    <View
      style={{
        alignItems: 'center',
        marginTop: 3,
        position: 'absolute',
        left: 1366 - 450 - 400,
        backgroundColor: 'none',
      }}
    >
      <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>{props.title || 'mijn afspeelijst'}</Text>
    </View>
  </View>
);

export default NavigationBar;
