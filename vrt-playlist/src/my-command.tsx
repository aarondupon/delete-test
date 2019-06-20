import * as React from 'react';
import { Image,Document,StyleSheet,render as renderSketchApp, Page, Artboard, Text, View, makeSymbol } from 'react-sketchapp';
import chroma from 'chroma-js';
import Mobile from './page/Mobile';
import Desktop from './page/Desktop';
import Header from './core/Header';
import Search from './core/Search'
import { DocumentContextProvider, DocumentContextConsumer } from './context/DocumentContext';
import MenuButton, { MenuButtonMiddle, MenuButtonLeft, MenuButtonRight, MenuButtonLeftSelected, MenuButtonRightSelected, MenuButtonMiddleSelected } from './core/Buttons/MenuButton';
import VBox from './core/Layout/VBox';
import HBox from './core/Layout/HBox';
import Thumbnail from './core/Image/Thumbnail';

import PodcastIconSvg from './core/svg/podcastIconSvg';
import MoreIconSvg from './core/Svg/moreIconSvg';
import HearIconSvg from './core/Svg/HearIconSvg';
import PannelToggleDownIconSvg from './core/Svg/PannelToggleDownIconSvg';

import Album from './core/Album';
import Add from './core/Buttons/Add';
import ListItem from './components/List/ListItem'
import Popular from './components/Popular'
import Player from './components/Player'
import PlayerMobile from './components/Player/PlayerMobile'
import InfoPanel from './components/InfoPanel';
import Scrubber from './components/Scrubber';
import PlayerControl from './components/PlayerControl';
import Tags from './components/Tags';
import P from './core/Text/P';
// import VrtNwsLogoSvg from './core/svg/vrtNwsLogoSvg'
//@ts-ignore
// import Image from 'react-native-remote-svg';



const getPage = (pages: object[], name: string) => {
  return pages.find((x: object) => x.toString().includes(name));
};

const render = (document: any[] | any, context: any) => {
  var data: any = context.document.documentData();
  var pages = context.document.pages();
  var data: any = context.document.documentData();

  const renders = (Array.isArray(document) ? document : [document]).map(C => {
    var page = getPage(pages, C.props.name);
    data.setCurrentPage(page);
    return renderSketchApp(C, page);
  });

  return renders;
};

// take a hex and give us a nice text color to put over it
const textColor = (hex: string) => {
  const vsWhite = chroma.contrast(hex, 'white');
  if (vsWhite > 4) {
    return '#FFF';
  }
  return chroma(hex)
    .darken(3)
    .hex();
};

interface SwatchProps {
  name: string;
  hex: string;
}

const Swatch = ({ name, hex }: SwatchProps) => (
  <View
    name={`Swatch ${name}`}
    style={{
      height: 96,
      width: 96,
      margin: 4,
      backgroundColor: hex,
      padding: 8,
    }}
  >
    <Text name="Swatch Name" style={{ color: textColor(hex), fontWeight: 'bold' }}>
      {name}
    </Text>
    <Text name="Swatch Hex" style={{ color: textColor(hex) }}>
      {hex}
    </Text>
  </View>
);

interface DocumentProps {
  colors: { [key: string]: string };
  children?: any;
  name?:string
}

interface DocumentPageProps {
  name: string;
  children?: any;
}
const DocumentPage1 = ({ colors }: DocumentProps) => (
  <Page>
    <Artboard
      name="Swatches"
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: (96 + 8) * 4,
      }}
    >
      {Object.keys(colors).map(color => (
        <Swatch name={'arear' + color} hex={colors[color]} key={color} />
      ))}
    </Artboard>
  </Page>
);

const DocumentPage2 = ({ colors }: DocumentProps) => (
  <Page>
    <View>
      <Text>azerazerarzrerez</Text>
    </View>
    <View name={`View ${'rarrarzrazerzrarerzrezarerz'}`}>
      <Text>View 2</Text>
    </View>
  </Page>
);

const DocumentPage = ({ children, name }: DocumentPageProps): any => {
  const childrenOriginal = children;
  return React.Children.map(childrenOriginal, (child: any) => React.cloneElement(child));
};

const styles = StyleSheet.create({
  avatar: {
    height: 220,
    width:220,
    resizeMode: 'contain',
    marginBottom: 20,
    borderRadius: 10,
  },
});

type AvatarP = {
  url: string,
};
// const Logo =  ( ) =>(
//   <View><Image  resizeMode='contain' style={styles.avatar} source={`data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px"  viewBox="0 0 100 100">
//   <ellipse data-custom-shape="ellipse" cx="50" cy="50" rx="50" ry="50" fill="green"  stroke="#00FF00" stroke-width ="2" />
// </svg>`} /></View>
// )
// const Logo =  ( ) =>(
//   <View>
//     <VrtNwsLogoSvg/>
//   </View>
// )

const RedSquare:any = () => (
  <View name="Square" style={{ width: 100, height: 100, backgroundColor: 'green' }}>
    <Text name="Red Square Text">Red Square</Text>
  </View>
);

const RedSquareSym:any = makeSymbol(RedSquare, 'squares/red');

const BlueSquare = () => (
  <View name="Square" style={{ width: 100, height: 100, backgroundColor: 'blue' }}>
    <Text name="Blue Square Text">Blue Square</Text>
  </View>
);

const BlueSquareSym = makeSymbol(BlueSquare, 'squares/blue');

const Photo = () => (
  <Image
    resizeMode="contain"
    // name="Photo"
    source="https://pbs.twimg.com/profile_images/895665264464764930/7Mb3QtEB_400x400.jpg"
    style={{ width: 100, height: 100 }}
  />
);
const PhotoSym:any = makeSymbol(Photo);

const Nested = () => (
  <View name="Multi" style={{ /*display: 'flex',*/ flexDirection: 'column' }}>
    <PhotoSym name="Photo Instance" style={{ width: 75, height: 75 }} />
    <RedSquareSym name="Red Square Instance" style={{ width: 75, height: 75 }} />
  </View>
);

const NestedSym = makeSymbol(Nested);




    
   


export default (context: any) => {
  const colorList = {
    Haus: '#F3F4F4',
    Night: '#333',
    Sur: '#96DBE4',
    'Sur Dark': '#24828F',
    Peach: '#EFADA0',
    'Peach Dark': '#E37059',
    Pear: '#93DAAB',
    'Pear Dark': '#2E854B',
    'TypeScript Blue': '#007ACC',
  };
 
  render(
    [
      <Desktop name="Desktop" colors={colorList} >
            <Artboard
              name="Swatches"
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 1366,
                height:768
              }}
            >
              <Header/>
              
              <Search style={{width:'100%'}}/>
              <View style={{padding:0,marginTop:10,marginLeft:120,width:320,height:26,flexDirection:'row'}}>
                <View />
                 <MenuButtonLeft label={'Home'}/>
                 <MenuButtonMiddleSelected label={'Playlist'} />s
                 <MenuButtonRight label={'Smart Radio'} />
                 <HBox style={{position:'absolute',right:0,width:100,marginTop:6}}>
                   <Text>Wijzigen</Text>
                 </HBox>
                 <HBox style={{position:'absolute',width:350,left:1366-450}}>
                     <HearIconSvg/>
                     <Text>mijn intresses selecteren</Text>
                  </HBox>
              </View>
              <VBox style={{width:'70%',marginLeft:'15%'}}>
              {([1,2,3,4]).map(x=><ListItem hover={x==2} edit={true} key={x}/>)}
              </VBox>
              <Popular style={{position:'absolute',right:0,top:'64%'}}/>
              <Player style={{position:'absolute',left:10,bottom:10}}/>
            </Artboard>
      </Desktop>,
      <Mobile name="Mobile" >
         <Artboard
              name="Mobile"
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 320,
                height:568,
 
              }}
            >
              <Header/>
              <Search style={{width:320-100}}/>
              <View style={{padding:0,margin:10,width:320,height:26,flexDirection:'row'}}>
                <View />
                 <MenuButtonLeft label={'Home'}/>
                 <MenuButtonMiddleSelected label={'Playlist'} />s
                 <MenuButtonRight label={'Smart Radio'} />
                 <HBox style={{position:'absolute',right:0,width:100,marginTop:6}}>
                   <Text>Wijzigen</Text>
                 </HBox>
                 
              </View>
             
              <VBox style={{width:'100%'}}>
              <HBox style={{paddingLeft:10}} >
                     <HearIconSvg/>
                     <View style={{width:10}} />
                     <Text>mijn intresses selecteren</Text>
              </HBox>
                {([1,2,3,4]).map(x=><ListItem hover={x==2} edit={true} key={x}/>)}
              </VBox>
              <PlayerMobile/>
            </Artboard>
            <View style={{height:100}}/>
            <Artboard
              name="Mobile"
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 320,
                height:568,
 
              }}
            >
              <Header/>
              <Search style={{width:320-100}}/>
              <View style={{padding:0,margin:10,width:320,height:26,flexDirection:'row'}}>
                <View />
                 <MenuButtonLeft label={'Home'}/>
                 <MenuButtonMiddleSelected label={'Playlist'} />s
                 <MenuButtonRight label={'Smart Radio'} />
                 <HBox style={{position:'absolute',right:0,width:100,marginTop:6}}>
                   <Text>Wijzigen</Text>
                 </HBox>
                 
              </View>
             
              <VBox style={{width:'100%'}}>
              <HBox style={{paddingLeft:10}} >
                     <HearIconSvg/>
                     <View style={{width:10}} />
                     <Text>mijn intresses selecteren</Text>
              </HBox>
                {([1,2,3,4]).map(x=><ListItem hover={x==2} edit={true} key={x}/>)}
              </VBox>
              <View style={{position:"absolute",width:320,height:568,backgroundColor:'#000000', opacity:.7}} />
              <VBox style={{position:"absolute",width:320,marginTop:20,height:568,backgroundColor:'#ffffff', opacity:1}} >
                <View style={{alignItems:"center",marginTop:10}} >
                  <PannelToggleDownIconSvg/>
                  <View style={{height:20}} />
                  <Album width={100} hover={false} />
                  <MenuButtonMiddleSelected style={{borderRadius:15,fontSize:15}} label={'toon alle afleveringen'} />s
                  <Add/>
                  <View style={{height:20}}/>
                  <InfoPanel/>
                  <View style={{height:50}}/>
                  <Scrubber/>
                  <PlayerControl/>
                </View>
               
              </VBox>
            </Artboard>
            <View style={{height:100}}/>
            <Artboard
              name="Smart Radio"
              style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                width: 320,
                height:568,
 
              }}
            >
              <Header/>
              <Search style={{width:320-100}}/>
              <View style={{padding:0,margin:10,width:320,height:26,flexDirection:'row'}}>
                <View />
                 <MenuButtonLeft label={'Home'}/>
                 <MenuButtonMiddleSelected label={'Playlist'} />s
                 <MenuButtonRight label={'Smart Radio'} />
                 <HBox style={{position:'absolute',right:0,width:100,marginTop:6}}>
                   <Text>Wijzigen</Text>
                 </HBox>
                 
              </View>
             
              <VBox style={{width:'100%'}}>
              <HBox style={{paddingLeft:10}} >
                     <HearIconSvg/>
                     <View style={{width:10}} />
                     <Text>mijn intresses selecteren</Text>
              </HBox>
                {([1,2,3,4]).map(x=><ListItem hover={x==2} edit={true} key={x}/>)}
              </VBox>
              <View style={{position:"absolute",width:320,height:568,backgroundColor:'#000000', opacity:.7}} />
              <VBox style={{position:"absolute",width:320,marginTop:20,height:568,backgroundColor:'#ffffff', opacity:1}} >
              <View style={{alignItems:"center",marginLeft:10,marginTop:10}} >
                  <PannelToggleDownIconSvg/>
                </View>
                <View style={{alignItems:"flex-start",marginLeft:10,marginTop:10}} >
                  
                  <View style={{height:20}}/>
                  <P style={{fontWeight:'bold',fontSize:16}}>Personaliseer uw jouw slimme playlist</P>
                  <P style={{fontSize:14}}>Kies één of meerder onderwerpen die je interesant vind.</P>
                  <P style={{fontSize:14}}>Je kan de gelecteerde onderwerpen nadien ook Wijzigen</P>
                  <View style={{height:50}}/>
                  <Tags/>
                </View>
                <View style={{alignItems:"center",marginLeft:10,marginTop:10}} >
                    <MenuButtonMiddleSelected style={{borderRadius:15,fontSize:15}} label={'wijzingen opslaan'} />s
                </View>

               
              </VBox>
            </Artboard>
      </Mobile>,
    ],
    context,
  );
};
