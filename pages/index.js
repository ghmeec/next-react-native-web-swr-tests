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


export default function App(props) {
  const [number,setNumber]=React.useState(0)
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
    <ScrollView style={styles.container}>
    
        <Grid style={{}}>
          <Section style={{width:"100%"}}> 
            <Block xsSize="1/1" smSize="1/1" lgSize="1/2"  style={{alignItems: 'center',}}>
              <Text style={[styles.link,{textAlign:"right"}]} accessibilityRole="link" href={`/alternate`}>
                Alternative
              </Text>
            </Block>
            <Block xsSize="1/1" smSize="1/1" lgSize="1/2" style={{alignItems: 'center',}}>
            <Text style={styles.link} accessibilityRole="link" href={`/404`}>
              404
            </Text>
            </Block>
          </Section>
      </Grid>
    

      <View style={styles.textContainer}>
        <SWRConfig>
        <Text accessibilityRole="header" style={styles.text}>
            Loaded Data
        </Text>
            {data.map((el,index)=>{
              return(
                <Text accessibilityRole="header" aria-level="3" style={styles.text} key={index}>
                  {el.title}
              </Text>
              )
            })
          }

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
      
      <View style={styles.textContainer}>
 
      </View>
          

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    // alignItems: 'center',
    flex:1,
    flexGrow: 1,
    // justifyContent: 'center',
    paddingVertical:15
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
  },
})
