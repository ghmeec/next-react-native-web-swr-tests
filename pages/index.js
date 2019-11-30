import * as React from 'react'
import { StyleSheet, Text, View,Button,  ActivityIndicator, } from 'react-native'
// import {Grid,Block,Section} from 'react-native-responsive-layout'
import useSWR, { SWRConfig } from "swr";

async function fetchTodos(...args) {
  const res = await fetch(...args);
  return await res.json();
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
    <View style={styles.container}>
      <View style={styles.textContainer}>
        {/* <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          Loading...
        </Text> */}
        <ActivityIndicator size="large" color="#0000ff" animating="true" />
      </View>
   </View>
  );

  return (
    <View style={styles.container}>
      <View style={{
        flexDirection:"row",


      }}>
      <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
        Alternative
      </Text>

       <Text style={styles.link} accessibilityRole="link" href={`/404`}>
        404
      </Text>

      </View>

      <View style={styles.textContainer}>
        <Text accessibilityRole="header" style={styles.text}>
            Loaded Data
        </Text>
        {data.map((el,index)=>{
          return(
            <Text accessibilityRole="header" aria-level="3" style={styles.text}>
              {el.title}
           </Text>
          )
        })
      }


      </View>

   
      
      <View style={styles.textContainer}>
        <Text accessibilityRole="header" aria-level="2" style={styles.text}>
          {number}
        </Text>
        <Button
          title="Add number"
          onPress={()=>{
            setNumber(number+1)
          }}
        >Add umber</Button>
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
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
    alignItems: 'center',
    fontSize: 24,
    marginBottom: 24,
  },
})
