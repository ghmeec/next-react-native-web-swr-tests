import * as React from 'react'
import { StyleSheet, Text, View,Button,  ActivityIndicator,ScrollView,TouchableOpacity } from 'react-native'
import {Grid,Block,Section} from 'react-native-responsive-layout'
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


const TopBar = ({ styles }) => {
  const topBarStyle = {
    position: "fixed",
    top: 0,
    display: "flex",
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: styles.topBarHeight,
    backgroundColor: styles.white(),
    borderBottom: `1px solid ${styles.black(0.1)}`,
    fontWeight: "bold",
    padding: "0px 20px",
    boxSizing: "border-box",
    paddingHorizontal:20,
  };

  return (
    <View style={topBarStyle}>
      <Text>{`😺️`}</Text>
      <Text style={{fontSize:18}}>George Honorius Milanzi</Text>
      <Text>{`⚙️`}</Text>
    </View>
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
            <TouchableOpacity onPress={()=>{}}>
              <Text accessibilityRole="link" href={`/alternate`} style={{ fontSize: 20,color:"white" }}>{item.icon}</Text>
            </TouchableOpacity>
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
        <ActivityIndicator size="large" color="rgb(29, 161, 242)" animating={true} />
      </View>
   </View>
  );

  return (
    <ScrollView style={[styles.container,{zIndex:0,marginTop:40}]}>
        
      <View style={styles.container}>
        <SWRConfig>
        <Text  aria-level="3" style={[styles.text,{fontSize:24}]}>
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
export default class App extends React.Component {

  stylesInner = {
    white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    topBarHeight: 45,
    footerMenuHeight: 50
  };

  menuItems = [
    { icon: `😀`, text: "Home" },
    { icon: `😉`, text: "Skills" },
    { icon: `😎`, text: "Projects" },
    { icon: `🤔`, text: "Experience" },
    { icon: `😛`, text: "Contacts" }
  ];


  render(){
    return (
      <View style={{flex:1}}>
        <TopBar styles={this.stylesInner} />
        <HomeContent></HomeContent>
        <FooterMenu menuItems={this.menuItems} styles={this.stylesInner} />
      </View>
    )
  }

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
