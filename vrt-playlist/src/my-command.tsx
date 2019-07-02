import * as React from 'react';
import {Artboard, Text, View } from 'react-sketchapp';
import Mobile from './sketch/PageTemplate/Mobile';
import Desktop from './sketch/PageTemplate/Desktop';
import Header from './core/Header';
import Search from './core/Search';
import Banner from './core/Banner';
import  { MenuButtonMiddle } from './core/Button/MenuButton';
import render from './sketch/render'
import VBox from './core/Layout/VBox';
import HBox from './core/Layout/HBox';

import HearIconSvg from './core/Svg/HearIconSvg';
import PannelToggleDownIconSvg from './core/Svg/PannelToggleDownIconSvg';

import Album from './core/Album';
import Add from './core/Button/Add';
import ListItem from './components/Playlist/components/ListItem';
import Playlist from './components/Playlist';
import Popular from './components/Popular';
import Player from './components/Player'
import PlayerMobile from './components/Player/PlayerMobile'
import InfoPanel from './components/InfoPanel';
import Scrubber from './components/Scrubber';
import PlayerControl from './components/PlayerControl';
import Tags from './components/Tags';
import TagsBig from './components/Tags/TagsBig';
import P from './core/Text/P';
import NavigationBar from './components/NavigationBar';
import PlaylistPannel from './components/PlaylistPannel';
import CenterVBox from './core/Layout/CenterVBox';


interface SwatchProps {
  name: string;
  hex: string;
}


interface DocumentProps {
  colors: { [key: string]: string };
  children?: any;
  name?:string
}

interface DocumentPageProps {
  name: string;
  children?: any;
}

const colorList = {
  lightGrey: '#F3F4F4',
  darkBlue: '#333',
  black: '#000',
  blue: '#2496CD',
  white: '#FFFFFF',
  green:'#5DFC71'
};


export const commands = [
  <Desktop name="Galaxy" colors={colorList} >
     <Artboard
          name="Mijn Afspeellijst"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 1366,
            height:768
          }}
        >
          <Header/>
          <Banner/>
          <PlaylistPannel width={1366}>
            <NavigationBar selectedIndex={1} title={'mijn intresses selecteren'}/>
            <Playlist edit={false} selectedIndex={3} />
          </PlaylistPannel>
          <Popular style={{position:'absolute',right:0,top:'64%'}}/>
        </Artboard>
        <View style={{height:100}}/>
        <Artboard
          name="Edit Mijn Afspeellijst"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 1366,
            height:768
          }}
        >
          <Header/>
          <Banner/>
          <NavigationBar
            title={'mijn intresses selecteren'}
            edit={true}
            selectedIndex={2}
             />
          <PlaylistPannel width={1366}>
            <Playlist selectedIndex={1} edit={true} />
            <Popular style={{position:'absolute',right:0,top:'64%'}}/>
          </PlaylistPannel>
          <Player/>
        </Artboard>
        <View style={{height:100}}/>
        <Artboard
          name="Selecteer interesses"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 1366,
            height:768
          }}
        >
          <Header/>
        
          <Banner style={{width:'100%'}}/>
          <NavigationBar
            title={'mijn intresses selecteren'}
            buttonRightTitle={'x Annuleer'}
            edit={true}
            selectedIndex={2}
            
          />
          {/** !!!!! dit is niet voor productie enkel om snel de demo te kunnen realiseren !!!!!!!!!!! */}
          <VBox style={{width:'70%',marginLeft:'15%'}}>
          <View style={{alignItems:"flex-start",marginLeft:10,marginTop:10}} >
              
              <View style={{height:20}}/>
              <P style={{fontWeight:'bold',fontSize:16}}>Personaliseer uw jouw slimme playlist</P>
              <P style={{fontSize:14}}>Kies één of meerder onderwerpen die je interesant vind.</P>
              <P style={{fontSize:14}}>Je kan de gelecteerde onderwerpen nadien ook Wijzigen</P>
              <View style={{height:50}}/>
            </View>
            <TagsBig />
            <View style={{height:30}} />
            <MenuButtonMiddle selected={true} style={{borderRadius:15,fontSize:16,width:200}} label={'Wijzingen opslaan'} />
          </VBox>
          <Popular />
          <Player />
        </Artboard>

        <View style={{height:100}}/>
        <Artboard
          name="Mijn slimme afspeellijst"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 1366,
            height:768
          }}
        >
          <Header/>
          <Banner/>
          <NavigationBar
            title={'mijn slimme afspeellijst'}
            buttonRightTitle={'mijn slimme afspeelijst'}
            edit={true}
            selectedIndex={2}
          />
          <PlaylistPannel width={1366}>
            <Playlist selectedIndex={1} edit={true} />
            <Popular />
          </PlaylistPannel>
          <Player />
        </Artboard>
        <View style={{height:100}}/>
  </Desktop>,
  <Mobile name="Mobile" colors={colorList}>
     <Artboard
          name="Mobile Playlist"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 320,
            height:568,

          }}
        >
          <Header/>
          <Search style={{width:320-100}}/>
          <NavigationBar
            title={'mijn slimme afspeellijst'}
            buttonRightTitle={'mijn slimme afspeelijst'}
            edit={false}
            selectedIndex={1}
            style={{marginLeft:5}}
            mobile={true}
          /> 
          <VBox style={{width:'100%'}}>
        {/*** opnieuw gewoon even snel implementeren om demo te kunnnen tonen, sorry  ;) */}
          <HBox style={{paddingLeft:10}} >
                 <HearIconSvg/>
                 <View style={{width:10}} />
                 <Text>mijn intresses selecteren</Text>
          </HBox>
            {([1,2,3,4,5,6,7,8,9,10]).map(x=><ListItem hover={x==2} edit={false} key={x}/>)}
          </VBox>
          <PlayerMobile/>
        </Artboard>
        <View style={{height:100}}/>
        <Artboard
          name="Mobile Playlist search"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 320,
            height:568,

          }}
        >
          <Header/>
          <Search style={{width:320-100}}/>
          <NavigationBar
            title={'mijn slimme afspeellijst'}
            buttonRightTitle={'mijn slimme afspeelijst'}
            edit={true}
            selectedIndex={2}
            style={{marginLeft:5}}
            mobile={true}
          /> 
          <VBox style={{width:'100%'}}>
          <HBox style={{paddingLeft:10}} >
                 <HearIconSvg/>
                 <View style={{width:10}} />
                 <Text>mijn intresses selecteren</Text>
          </HBox>
            {([1,2,3,4,5,6,7,8,9 ,10]).map(x=><ListItem hover={x==2} edit={true} key={x}/>)}
          </VBox>
        </Artboard>
        
        <View style={{height:100}}/>
        <Artboard
          name="Mobile Playlist"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 320,
            height:568,

          }}
        >
          <Header/>
          <Search style={{width:320-100}}/>
          <NavigationBar
            title={'mijn slimme afspeellijst'}
            buttonRightTitle={'mijn slimme afspeelijst'}
            edit={true}
            selectedIndex={2}
            style={{marginLeft:5}}
            mobile={true}
          /> 
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
            <CenterVBox style={{
                width: 320,
                marginTop:10}} >
              <PannelToggleDownIconSvg/>
              <View style={{height:20}} />
              <Album width={100} hover={false} />
              <MenuButtonMiddle selected={true} style={{borderRadius:15,fontSize:15}} label={'toon alle afleveringen'} />
              <Add/>
              <View style={{height:20}}/>
              <InfoPanel/>
              <View style={{height:50}}/>
              <Scrubber/>
              <PlayerControl/>
            </CenterVBox>
           
          </VBox>
        </Artboard>
        <View style={{height:100}}/>
        <Artboard
          name="Mobile Smart Radio selecteer interesses"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 320,
            height:568,

          }}
        >
          <Header/>
          <Search style={{width:320-100}}/>
          <NavigationBar
            title={'mijn slimme afspeellijst'}
            buttonRightTitle={'mijn slimme afspeelijst'}
            edit={true}
            selectedIndex={2}
            style={{marginLeft:5}}
            mobile={true}
          /> 
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
                <MenuButtonMiddle selected={true} style={{borderRadius:15,fontSize:15}} label={'wijzingen opslaan'} />s
            </View>

           
          </VBox>
        </Artboard>
        
        <View style={{height:100}}/>
        <Artboard
          name="Smart Radio mijn slimme afspeellijst"
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            width: 320,
            height:568,

          }}
        >
          <Header/>
          <NavigationBar
            title={'mijn slimme afspeellijst'}
            buttonRightTitle={'mijn slimme afspeelijst'}
            edit={true}
            selectedIndex={2}
            style={{marginLeft:5}}
            mobile={true}
          /> 
          <VBox style={{width:'100%'}}>
          <HBox style={{paddingLeft:10}} >
                 <HearIconSvg/>
                 <View style={{width:10}} />
                 <Text>mijn intresses selecteren</Text>
          </HBox>
            {([1,2,3,4,5,6,7,8,9,10]).map(x=><ListItem hover={x==2} edit={false} key={x}/>)}
          </VBox>

          <View style={{position:"absolute",width:320,height:568,backgroundColor:'#000000', opacity:0}} />
          <VBox style={{position:"absolute",width:320,marginTop:20,height:568,backgroundColor:'#ffffff', opacity:0}} >
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
                <MenuButtonMiddle selected={true} style={{borderRadius:15,fontSize:15}} label={'wijzingen opslaan'} />s
            </View>
          </VBox>
        </Artboard>
  </Mobile>,
]
    
export default (context: any) => {
  


  render(
    commands,
    context,
  );
};
