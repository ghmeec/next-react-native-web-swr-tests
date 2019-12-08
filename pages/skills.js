import React from 'react'
import { View,Text  } from 'react-native'
import {TopBar,FooterMenu} from './index'
import {TransitionAnimation,fontAndIconsLoading,LoadingIndicator} from './index'

export default class Skills extends React.Component{
    
    constructor(props) {
        super(props);
        this.state = {
          pageLoading:true
        };
    
      }
    
      componentDidMount() {
        this.setState({pageLoading:true})
        fontAndIconsLoading()
        this.setState({pageLoading:false})
      }
    

    render(){
        const {pageLoading} = this.state
        if(pageLoading){
            return(
                <LoadingIndicator/>
            )
        }
        return(
            <View style={{flex:1}}>
                <TransitionAnimation/>
                <TopBar/>
                <View style={{flex:1,justifyContent:"center",paddingHorizontal:15}}>
                    <Text style={{fontWeight:"bold",fontSize:18}}>Skills Page</Text> 
                    <Text style={{fontWeight:"bold",fontSize:14}}>NOTE : Still under constrution!</Text> 

                </View>
                <FooterMenu/>

            </View>
            
        )
    }

}