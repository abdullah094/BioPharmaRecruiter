import React from 'react'
import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity,Alert,ScrollView } from 'react-native'
import Colors from '../constants/Colors'

const borderRadius =  10
const Login = ({navigation}) => {

  const LoginPress = () => {
navigation.navigate("DrawerNavigator")
  }

  return (
    <ScrollView contentContainerStyle={styles.app} keyboardShouldPersistTaps='handled'>
      <View style={{alignItems:"center",top:-30}}>
     <Image style={{height:40,width:270,paddingBottom:10,}} source={require('../assets/logo.png')}/>
     <Image style={{height:210,width:270,margin:10,paddingBottom:10}} source={require('../assets/login-screen-image.png')}/>
     <View style={styles.input_box}>
     <Text style={styles.input_box_text}>Email Address</Text>
     <TextInput style={styles.input}/>
     </View>
     <View style={styles.input_box}>
     <Text style={styles.input_box_text}>Password</Text>
     <TextInput style={styles.input}/>
     </View>
     <TouchableOpacity style={styles.login_button} onPress={LoginPress}>
      <Text style={styles.login_button_text}>Login</Text>
     </TouchableOpacity>
     </View>
    </ScrollView>
  )
}

export default Login

const styles = StyleSheet.create({
    app:{
        flex:1,
        backgroundColor:Colors.white,
        alignItems:'center',
        justifyContent:'center'
    },
    input_box:{
      width:270,marginTop:5
    },
    login_button:{
      backgroundColor:Colors.orange,
      width:100,
      height:40,
      margin:5,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:borderRadius
    },
    login_button_text:{
color:Colors.white,
fontWeight:'bold',
fontSize:15
    },
    input:{
      borderWidth:1,
      borderColor:Colors.black,
      borderRadius:borderRadius,
      padding:5,
      width:"100%",
      paddingHorizontal:10

    },
    input_box_text:{
      color:Colors.black,
      fontSize:15
    }
})