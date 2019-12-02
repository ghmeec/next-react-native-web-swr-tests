import * as React from 'react'
import { StyleSheet, Text, View,Button,  ActivityIndicator,ScrollView } from 'react-native'
import {Grid,Block,Section} from 'react-native-responsive-layout'
import useSWR, { SWRConfig } from "swr";

async function fetchTodos(...args) {
  const res = await fetch(...args);
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


const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.white(),
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box"
  };

  return (
    <div style={topBarStyle}>
      <span>{`😺️`}</span>
      George Honorius Milanzi
      <span>{`⚙️`}</span>
    </div>
  );
};


const FooterMenu = ({ menuItems, styles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "stretch",
        width: "100%",
        height: styles.footerMenuHeight,
        backgroundColor: "#333",
        color: "#fff",
        position: "fixed",
        bottom: 0
      }}
    >
      {menuItems.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: 1
            }}
          >
            <Text accessibilityRole="link" href={`/alternate`} style={{ fontSize: 20 }}>{item.icon}</Text>
          </div>
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
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Lost internet connection
        </Text>
      </View>
    </View>

  );
  if (!data) return (
    <View style={[styles.container,styles.centered]}>
      <View style={styles.textContainer}>
        {/* <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Loading...
        </Text> */}
        <ActivityIndicator size="large" color="#0000ff" animating={true} />
      </View>
   </View>
  );

  return (
    <ScrollView style={[styles.container,{zIndex:-1,marginTop:40}]}>
        
      <View style={styles.container}>
        <SWRConfig>
        <Text accessibilityRole="header" style={styles.text}>
            Welcome to My Personal website
        </Text>
        <Grid style={{}}>
          <Section style={{width:"100%"}}> 
            {data.map((el,index)=>{
              return(
              <Block xsSize="1/1" smSize="1/1"lgSize="1/2"  key={index} style={{backgroundColor: getRandomColor(),height:200,justifyContent:"center"}}>
                <Text accessibilityRole="header" aria-level="3" style={styles.text} >
                    {el.title}
                </Text>
              </Block>
              )
            })
          }
          </Section>
          </Grid>

        </SWRConfig>

      </View>

      <Grid style={{}}>
        <Section style={{width:"100%"}}> 
          <Block xsSize="1/1" smSize="1/1"lgSize="1/2"  style={{backgroundColor: getRandomColor(),height:200}}>
            <Text >1/2</Text>
          </Block>
          <Block xsSize="1/1" smSize="1/1"lgSize="1/2" style={{backgroundColor: getRandomColor(),height:200}}>
            <Text>1/2</Text>
          </Block>

          <Block xsSize="1/1" smSize="1/1" lgSize="1/2" style={{backgroundColor: getRandomColor(),height:200}}> 
            <Text>1/2</Text>
          </Block>

          <Block  xsSize="1/1" smSize="1/1" lgSize="1/2" style={{backgroundColor: getRandomColor(),height:200}}> 
            <Text>1/2</Text>
          </Block>

        </Section>
     </Grid>
      
    </ScrollView>
  )


}
export default function App(props) {

  const stylesInner = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 45,
    footerMenuHeight: 50
  };

  const menuItems = [
    { icon: `😀`, text: "Item 1" },
    { icon: `😉`, text: "Item 2" },
    { icon: `😎`, text: "Item 3" },
    { icon: `🤔`, text: "Item 4" },
    { icon: `😛`, text: "Item 5" }
  ];



  return (
    <View style={{flex:1}}>
      <TopBar styles={stylesInner} />
      <HomeContent></HomeContent>
      <FooterMenu menuItems={menuItems} styles={stylesInner} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex:1,
    flexGrow: 1,
    // justifyContent: 'center',
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
    fontSize: 24,
    marginBottom: 24,
    textAlign:"center"
  },
})
