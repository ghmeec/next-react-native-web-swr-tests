import React from 'react'
import { View,Text  } from 'react-native'
import {TopBar,FooterMenu} from './index'
export default function Skills(props){

    return(
        <View style={{flex:1}}>
            <TopBar/>
            <View style={{flex:1,justifyContent:"center",paddingHorizontal:15}}>
                <Text style={{fontWeight:"bold",fontSize:18}}>Skills Page</Text> 
                <Text style={{fontWeight:"bold",fontSize:14}}>NOTE : Still under constrution!</Text> 

            </View>
            <FooterMenu/>

        </View>
        
    )
}