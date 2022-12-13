import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const SmallBox = (props) => {
  return (
    <View style={{backgroundColor: props.color, height: 80, width: 121,justifyContent:'center',alignItems:'center'}}>

        <Text numberOfLines={3} style={{color:Colors.white,fontWeight:'bold',fontSize:16,width:"92%",textAlign:'center'}}>{props.text}</Text>
    </View>
  )
}

export default SmallBox

const styles = StyleSheet.create({})