import  React ,{useContext,useEffect} from 'react';
import { Image,StyleSheet,render as renderSketchApp, Page, Artboard, Text, View, makeSymbol } from 'react-sketchapp';
import chroma from 'chroma-js';
import VrtNwsLogoSvg from '../Svg/vrtNwsLogoSvg';
import DocumentContext, { useDocument, DocumentContextConsumer } from '../../context/DocumentContext';

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
const Logo =  ( ) =>(
  <View>
    <VrtNwsLogoSvg/>
  </View>
)

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

const HeaderTop = () => (
  <Image
    resizeMode="contain"
    // name="Photo"
    source="http://127.0.0.1:8080/assets/templates/header-top.png"
    style={{ width: 1258/4, height: 88/4 ,alignSelf:"flex-end", right:0}}
  />
);
const HeaderTopSym:any = makeSymbol(HeaderTop);

const HeaderNav = () => (
    <Image
      resizeMode="cover"
      source="http://127.0.0.1:8080/assets/templates/header-nav.png"
      style={{ right:0,width: 386/4, height: 102/4,alignSelf:"flex-end"}}
    />
  );
  const HeaderNavSym:any = makeSymbol(HeaderNav);

const Header = (props?) => {
  const [state]:any = useContext(DocumentContext);
  return(<View name="Multi" style={{height:50,flexDirection:"row",width:state.width,flexShrink:0 }}>
      <VrtNwsLogoSvg style={{marginTop:10,marginLeft:10,maxWidth:state.width/6,maxHeight:(state.width/6)/3.9534883721}}  />
       <View style={{
        width:state.width-180,
        position:'absolute',
        right:0,
        paddingRight:10,
        paddingTop:2,
        alignItems: "flex-end",
        justifyContent:"flex-start",
        flexDirection:"column",
        }}>
        {state.width > 386 && <HeaderTopSym />}
        
        <HeaderNavSym />
      </View>
  </View>
)};
// makeSymbol(Header,'Header');
export default Header;

