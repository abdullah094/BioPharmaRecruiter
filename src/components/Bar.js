import { StyleSheet, Text, View,Dimensions,SafeAreaView } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'
import Icons from '../constants/Icons'

const {width} = Dimensions.get('screen')
const Bar = (props) => {
  return (
    <SafeAreaView 
    style={{backgroundColor:Colors.blue,width:width,height:60,alignItems:"center",paddingHorizontal:10,flexDirection:'row',marginBottom:5,justifyContent:'space-between'}}>
      <View style={{flexDirection:'row',alignItems:'center'}}>
      {Icons.dot}
      <Text style={{color:Colors.white,marginLeft:5,fontWeight:'bold',fontSize:19}}>{props.heading}</Text>
      </View>
{props._leads?<View style={{backgroundColor:Colors.orange,height:35,width:100,borderRadius:5,justifyContent:'center',alignItems:'center',padding:2}}>
<Text numberOfLines={2} style={{color:Colors.white,fontWeight:'bold'}}>Leads: {props.leads}</Text>
</View>:<View></View>}
      
    </SafeAreaView>
  )
}

export default Bar

const styles = StyleSheet.create({})