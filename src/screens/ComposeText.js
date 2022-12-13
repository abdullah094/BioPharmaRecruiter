import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../constants/Colors'

const ComposeText = () => {
  return (
    <View style={styles.container}>
      <Text>ComposeText</Text>
    </View>
  )
}

export default ComposeText

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:Colors.white
  }
})