import * as React from 'react'
import { StyleSheet, Text, View,Button,  ActivityIndicator,ScrollView,TouchableOpacity,Image } from 'react-native'
import {Grid,Block,Section} from 'react-native-responsive-layout'
// import { Button as ElementButton } from 'react-native-elements'

import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import iconFont2 from 'react-native-vector-icons/Fonts/AntDesign.ttf'
import iconFont3 from 'react-native-vector-icons/Fonts/Entypo.ttf'

import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'

const logo="/site_logo.png"

// <img src="/my-image.png" alt="my image" />
import useSWR, { SWRConfig } from "swr";

async function fetchTodos( ...args ) {
  const res = await fetch( ...args );
  return await res.json();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const TopBar = ({ stylesInner }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: stylesInner.topBarHeight,
    backgroundColor: stylesInner.white(),
    borderBottom: `1px solid ${stylesInner.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
    paddingHorizontal:20,
  };

  return (

    <Grid style={{}}>
    <Block xsSize="1/4" smSize="1/4"lgSize="1/4"  
      style={[{paddingVertical:8},styles.contentPadding]
      }>
      <TouchableOpacity
          onPress={()=>{}}
          >
          <Image
          
          source={logo}
          src={logo} 
          style={[{
            height:32,
            width:32
          }]}
          alt="my image" />
        </TouchableOpacity>
    </Block>

    <Block xsSize="1/4" smSize="1/4"lgSize="1/4"  style={{}}>
    
    </Block>

    </Grid>
    // <View style={topBarStyle}>
    //   {/* <Text>{`😺️`}</Text> */}
    //   <TouchableOpacity
    //     onPress={()=>{}}
    //     >
    //     <img 
        
    //     src={logo} 
    //     style={{
    //       height:30
    //     }}
    //     alt="my image" />
    //   </TouchableOpacity>
    //   <Text style={{
    //     fontSize:18,
    //     color:'#17252A',
    //     fontFamily:"Helvetica"
    //     }}>George Honorius Milanzi</Text>
    //   <AntIcon name="setting" size={24} color="#333" />
    // </View>
  );
};


const FooterMenu = ({ menuItems, stylesInner }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: stylesInner.footerMenuHeight,
        backgroundColor: "#17252A",
        color: "#fff",
        position: "fixed",
        bottom: 0
      }}
    >
      {menuItems.map((item, i) => {
        return (
          <View
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <TouchableOpacity onPress={()=>{}}>
              <Text accessibilityRole="link" href={`${item.to}`} style={{ fontSize: 20,color:"white",textAlign:"center" }}>{item.icon}</Text>
              <Text style={[stylesInner.menuItemsText,styles.menuItemsText]}>{true&& item.text}</Text>

              {/* <Text style={[stylesInner.menuItemsText,styles.menuItemsText]}>{stylesInner.showFooterMenuText && item.text}</Text> */}
            </TouchableOpacity>
          </View>
        );
      })}
    </div>
  );
};


const HomeContent=()=>{

  const { data, error } = useSWR(
    //  using mongodb stictch webbook
    //  for real time database update in mongodb atlas
    //  now works in real time

    "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/shutta-jrspv/service/fetchUsers/incoming_webhook/todoHook",
    fetchTodos
  );
  


  if (error) return (
    <View style={[styles.container,{justifyContent:"center"},{zIndex:0,marginTop:40}]}>
      <View style={styles.textContainer}>
        <Text  aria-level="2" style={styles.text}>
          Lost internet connection
        </Text>
      </View>
    </View>

  );
  if (!data) return (
    <View style={[styles.container,styles.centered,{zIndex:0,marginTop:40}]}>
      <View style={styles.textContainer}>
        {/* <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Loading...
        </Text> */}
        <ActivityIndicator size="large" color="#17252A" animating={true} />
      </View>
   </View>
  );

  return (
    <ScrollView style={[{zIndex:0,marginTop:40}]}>
        
      <View style={styles.container}>
        <SWRConfig>
        <Grid style={{}}>
          <Section style={{width:"100%"}}> 
              <Block xsSize="1/1" smSize="1/1"lgSize="1/2"   style={{
                // backgroundColor: getRandomColor(),
                height:200,justifyContent:"center"}}>

                   <Text
                      style={styles.contentPadding}
                    >Hello, I am </Text>
                    <Text  aria-level="3" style={[
                      styles.text,{
                        fontSize:24,
                        fontFamily: ["Roboto", "Helvetica", "Arial"],
                        color:"#17252A",
                        fontWeight:"bold",
                        paddingHorizontal:15
                        }]}>George Millanzi
                    </Text>
                    <Text style={styles.contentPadding}>Web and Mobile Developer based in Tanzania. Worked with variety of Techs to build a number of products </Text>
                    <Text style={[styles.contentPadding,{

                        fontSize:16,
                        fontFamily: ["Roboto", "Helvetica", "Arial"],
                        color:"#17252A",
                        fontWeight:"bold",
                        marginVertical:20
                        }]}>NOTE: This site is till under construction!</Text>
              </Block>

              <Block xsSize="1/1" smSize="1/1"lgSize="1/2"  style={{
                // backgroundColor: getRandomColor(),
                height:200,justifyContent:"center"}}>
              
              </Block>

          </Section>
          </Grid>

        </SWRConfig>

      </View>
     
      
    </ScrollView>
  )


}
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);

    // Generate required css
  
    const iconFontStyles = `@font-face {
      src: url(${iconFont});
      font-family: FontAwesome;
    }
    @font-face {
      src: url(${iconFont2});
      font-family: AntDesign;
    }

    @font-face {
      src: url(${iconFont3});
      font-family:  Entypo;
    }

   
    
    `;

    // Create stylesheet
    const style = document.createElement('style');
    style.type = 'text/css';


    if (style.styleSheet) {
      style.styleSheet.cssText = iconFontStyles;
    } else {
      style.appendChild(document.createTextNode(iconFontStyles));
    }

    // Inject stylesheet
    document.head.appendChild(style);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

 

 

  render(){
    const { windowWidth } = this.state;

    const stylesInner = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      // show footer menu text when window is wide enough
      showFooterMenuText: windowWidth > 500
    };

    const  menuItems = [
    { icon: <AntIcon name="home" size={24} color="#fff"/>, text: "Home" ,to:"/" },
    { icon: <EntypoIcon name="graduation-cap" size={24} color="#fff" />, text: "Skills",to:"/skills" },
    { icon: <EntypoIcon name="archive" size={24} color="#fff" />, text: "Projects",to:"/projects" },
    { icon: <EntypoIcon name="code" size={24} color="#fff" />, text: "Experience", to:"/experience"},
    { icon: <AntIcon name="contacts" size={24} color="#fff" />, text: "Contacts", to:"/contacts" }
  ];


    return (
      <View style={{flex:1}}>
        <TopBar stylesInner={stylesInner} />
        <HomeContent></HomeContent>
        <FooterMenu menuItems={menuItems} stylesInner={stylesInner} />
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex:1,
    flexGrow: 1,
    justifyContent: 'center',
    paddingTop:15,
    marginBottom:0
  },
  centered:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    marginHorizontal:40
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  text: {
    // alignItems: 'center',
    fontSize: 15,
    marginBottom: 24,
    // textAlign:"center",
    paddingHorizontal:15,
  },
  contentPadding:{
    paddingHorizontal:15
  },
  menuItemsText:{
    fontSize:12,
    color:"white"
  }
})
