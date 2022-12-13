import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors';
const BigBox = (props) => {
  return (
    <View style={{backgroundColor: props.color, height: 80, width: 180,justifyContent:'center',alignItems:'center'}}>
          <Text numberOfLines={3} style={{color:Colors.white,fontWeight:'bold',fontSize:15,textAlign:'center',width:"90%"}}>{props.text}</Text>
    </View>
  )
}

export default BigBox

const styles = StyleSheet.create({
  
})