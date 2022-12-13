import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const Inbox = () => {
  return (
    <View>
      <Text>Inbox</Text>
    </View>
  )
}

export default Inbox

const styles = StyleSheet.create({

    app:{
        flex:1,
        backgroundColor:Colors.white
    },
    orange_box:{backgroundColor:Colors.orange,height:100,width:200,}
})