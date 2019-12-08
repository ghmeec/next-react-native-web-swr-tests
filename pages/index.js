import * as React from 'react'
import { StyleSheet, Text, View,Button,  ActivityIndicator,ScrollView,TouchableOpacity,Image } from 'react-native'
import {Grid,Block,Section} from 'react-native-responsive-layout'
// import { Button as ElementButton } from 'react-native-elements'
import Link from 'next/link';


import iconFont from 'react-native-vector-icons/Fonts/FontAwesome.ttf';
import iconFont2 from 'react-native-vector-icons/Fonts/AntDesign.ttf'
import iconFont3 from 'react-native-vector-icons/Fonts/Entypo.ttf'

import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign'
import EntypoIcon from 'react-native-vector-icons/Entypo'

import NProgress from 'nprogress'
import Router from 'next/router'
import Head from 'next/head'


Router.events.on('routeChangeStart', url => {
  console.log(`Loading: ${url}`)
  NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


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

let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

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


const TopBar = () => {

  return (
    <View style={{height:50,zIndex:1}}>
      <Grid style={{width:"100%"}}>
        <Block xsSize="1/4" smSize="1/4"lgSize="1/4"  
          style={[{marginVertical:8},styles.contentPadding]
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
    </View>
  );
};


const FooterMenu = () => {
  return (
    <View
      style={{
        flexDirection:"row",
        alignItems: "stretch",
        height: stylesInner.footerMenuHeight,
        backgroundColor: "#17252A",
        color: "#fff",
        height:50
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
            <Link href={`${item.to}`} >
            <TouchableOpacity onPress={()=>{}}>
              
                <Text accessibilityRole="link" style={{ fontSize: 20,color:"white",textAlign:"center" }}>{item.icon}</Text>
                <Text style={[stylesInner.menuItemsText,styles.menuItemsText]}>{true&& item.text}</Text>

              {/* <Text style={[stylesInner.menuItemsText,styles.menuItemsText]}>{stylesInner.showFooterMenuText && item.text}</Text> */}
            
             
            </TouchableOpacity>
            </Link>
          </View>
        );
      })}
    </View>
  );
};


const HomeContent=()=>{

  // const { data, error } = useSWR(
  //   //  using mongodb stictch webbook
  //   //  for real time database update in mongodb atlas
  //   //  now works in real time

  //   "https://webhooks.mongodb-stitch.com/api/client/v2.0/app/shutta-jrspv/service/fetchUsers/incoming_webhook/todoHook",
  //   fetchTodos
  // );
  


  // if (error) return (
  //   <View style={[styles.container,{justifyContent:"center"},{zIndex:0,marginTop:40}]}>
  //     <View style={styles.textContainer}>
  //       <Text  aria-level="2" style={styles.text}>
  //         Lost internet connection
  //       </Text>
  //     </View>
  //   </View>

  // );
  // if (!data) return (
  //   <View style={[styles.container,styles.centered,{zIndex:0,marginTop:40}]}>
  //     <View style={styles.textContainer}>
  //       {/* <Text accessibilityRole="header" aria-level="2" style={styles.text}>
  //         Loading...
  //       </Text> */}
  //       <ActivityIndicator size="large" color="#17252A" animating={true} />
  //     </View>
  //  </View>
  // );

  return (
        
      <View style={[styles.container,
        {
          // backgroundColor:"red"
        }
        ]}>
        <Grid style={{}}>
          <Section style={{width:"100%"}}> 
              <Block xsSize="1/1" smSize="1/1"lgSize="1/2"   style={{
                // backgroundColor: getRandomColor(),
                justifyContent:"center"}}>

                   <Text
                      style={styles.contentPadding}
                    >Hello, I am </Text>
                    <Text  aria-level="3" style={[
                      styles.text,{
                        fontSize:24,
                        fontFamily: "Helvetica", 
                        // "Helvetica", "Arial"],
                        color:"#17252A",
                        fontWeight:"bold",
                        paddingHorizontal:15
                        }]}>George Millanzi
                    </Text>
                    <Text style={styles.contentPadding}>Web and Mobile Developer based in Tanzania. Worked with variety of Techs to build a number of products </Text>
                    <Text style={[styles.contentPadding,{

                        fontSize:16,
                        fontFamily:"Helvetica",
                        color:"#17252A",
                        fontWeight:"bold",
                        marginVertical:20
                        }]}>NOTE: This site is till under construction!</Text>
              </Block>

              <Block xsSize="1/1" smSize="1/1"lgSize="1/2"  style={{
                // backgroundColor: getRandomColor(),
                justifyContent:"center"}}>
              
              </Block>

          </Section>
          </Grid>


      </View>
     
      
   
  )


}

const LoadingIndicator=()=>{
  return(
    <View style={[styles.container,styles.centered]}>
      <View style={styles.textContainer}>
        {/* <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Loading...
        </Text> */}
        <ActivityIndicator size="large" color="#17252A" animating={true} />
      </View>
   </View>
  )
}


const TransitionAnimation=()=>{
  return(
    <Head>
    {/* Import CSS for nprogress */}
    <link rel="stylesheet" type="text/css" href="/nprogress.css" />
  </Head>
  )
}

const fontAndIconsLoading=()=>{
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
  console.log("All loaded alread")

}



export default class App extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      indexLoading:true
    };

  }

  componentDidMount() {
    this.setState({indexLoading:true})
    fontAndIconsLoading()
    this.setState({indexLoading:false})
  }



  render(){
    const {indexLoading}=this.state
    if(indexLoading){
      return(
        <LoadingIndicator/>
      )
    }

    return (
      <View style={{flex:1}}>
        <TransitionAnimation/>
        <TopBar  />
        <HomeContent/>
        <FooterMenu/>
      </View>
    )
  }

}

export {TopBar} 
export {FooterMenu}
export {TransitionAnimation}
export {fontAndIconsLoading}
export {LoadingIndicator}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex:1,
    justifyContent: 'center',
    paddingTop:15,
    marginBottom:0,
    zIndex:10
  },
  centered:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    
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
