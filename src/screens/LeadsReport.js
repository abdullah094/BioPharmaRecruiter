import { Dimensions, StyleSheet, Text, TextInput, View,ScrollView, TouchableOpacity,PixelRatio } from 'react-native'
import React from 'react'
import Bar from '../components/Bar'
import Colors from '../constants/Colors'
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
  } from 'react-native-popup-menu';
import Icons from '../constants/Icons';
import PreScreeningQestions from '../components/PreScreeningQestions';
import PreviousLeadDetails from '../components/PreviousLeadDetails';
const {width} = Dimensions.get('window')
const pixels = PixelRatio.getPixelSizeForLayoutSize(200)
const LeadsReport = () => {
// console.log(PixelRatio.roundToNearestPixel(8.5))

  return (
    <ScrollView style={{flex:1}} contentContainerStyle={styles.container}>
   <Bar heading={"Leads Report"}/>
   <View style={styles.form}>
   <Text style={styles.heading}>Lead Details</Text>
   <View style={styles.form_box}>
    <Text style={styles.input_name}>Lead name:</Text>
    <TextInput style={styles.input_box}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Email:</Text>
    <TextInput style={styles.input_box}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Telephone:</Text>
    <TextInput style={styles.input_box}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Address:</Text>
    <TextInput style={styles.input_box}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Study:</Text>
   <TextInput style={[styles.input_box,{borderWidth:0}]} value={"Asthma/BIO-FR"} editable={false} selectTextOnFocus={false}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Assigned to:</Text>
   <TextInput style={[styles.input_box,{borderWidth:0}] } value={"wizard developer"} editable={false} selectTextOnFocus={false}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Assigned Date:</Text>
   <TextInput style={[styles.input_box,{borderWidth:0}]} value={"4/10/210"} editable={false} selectTextOnFocus={false}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Protocol number:</Text>
    <View style={styles.input_box}>
    <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
    </View>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Sponsor name:</Text>
   <TextInput style={[styles.input_box,{borderWidth:0}]} value={"Novo Nordisk"} editable={false} selectTextOnFocus={false}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Site ID:</Text>
    <View style={styles.input_box}>
    <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
    </View>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Secondary Study:</Text>
    <View style={styles.input_box}>
    <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
    </View>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Recruitment status:</Text>
    <View style={styles.input_box}>
    <Menu>
      <MenuTrigger text='Select action' />
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
    </View>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Schedule data:</Text>
   <TextInput style={[styles.input_box,{borderWidth:0}]} value={"4/10/210"} editable={false} selectTextOnFocus={false}/>
   </View>

   <View style={styles.form_box}>
    <Text style={styles.input_name}>Outcome:</Text>
    <View style={styles.input_box}>
    <Menu>
      <MenuTrigger text='Select action'/>
      <MenuOptions>
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
        <MenuOption onSelect={() => alert(`Save`)} text='Save' />
    
        <MenuOption onSelect={() => alert(`Delete`)} >
          <Text style={{color: 'red'}}>Delete</Text>
        </MenuOption>
        <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
      </MenuOptions>
    </Menu>
    </View>
    
   </View>
   <View style={{flexDirection:'row'}}>
   <TouchableOpacity style={styles.send_button}>
    <Text style={styles.send_button_text}>Send sms</Text>
   </TouchableOpacity>
   <TouchableOpacity style={styles.send_button}>
    <Text style={styles.send_button_text}>Create email</Text>
   </TouchableOpacity>
   </View>
   </View>
   <View style={{marginVertical:25}}>
    <PreScreeningQestions/>
   </View>
   <PreviousLeadDetails/>
  
   </ScrollView>
   )
}

export default LeadsReport

const styles = StyleSheet.create(
    {
        container:{

alignItems:'center'
        },
heading:{
fontWeight:'bold',
color:Colors.orange,
fontSize:15,
marginVertical:10,
marginTop:20
    },
form:{
    width:width-10
},
form_box:{
    width:"100%",
    flexDirection:'row',
    height:30,
    alignItems:'center',
    marginBottom:10,
    justifyContent:'space-between',
    paddingHorizontal:5,
    
},
input_name:{
color:Colors.gray
},
input_box:{
borderWidth:1,
width:"65%",
height:"100%",
borderRadius:5,marginLeft:5,borderColor:"#D3D3D3",
padding:1,
paddingHorizontal:5,marginRight:5,
justifyContent:'center'
},
send_button:{
    backgroundColor:Colors.orange,
    margin:5,
    width:100,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
},
send_button_text:{
    color:Colors.white,
    fontSize:15,
    fontWeight:'bold'
}
})