import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Dashboard from '../screens/Dashboard';
import CustomDrawerContent from '../components/CustomDrawerContent';
import MyWorkSpace from '../screens/MyWorkSpace'
import ComposeText from '../screens/ComposeText';
import InboxText from '../screens/InboxText';
import SentText from '../screens/SentText';
import ComposeEmail from '../screens/ComposeEmail';
import EmailInbox from '../screens/EmailInbox';
import SentEmails from '../screens/SentEmails';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
   
    <Drawer.Navigator initialRouteName="Dashboard" screenOptions={{headerShown:false,swipeEnabled: false }}
     drawerContent={(props) => <CustomDrawerContent {...props} />}>
       
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="MyWorkSpace" component={MyWorkSpace} />
      <Drawer.Screen name="ComposeText" component={ComposeText} />
      <Drawer.Screen name="InboxText" component={InboxText} />
      <Drawer.Screen name="SentText" component={SentText} />
      <Drawer.Screen name="ComposeEmail" component={ComposeEmail} />
      <Drawer.Screen name="EmailInbox" component={EmailInbox} />
      <Drawer.Screen name="SentEmails" component={SentEmails} />
     
    </Drawer.Navigator>
 
  )
}

export default DrawerNavigator

const styles = StyleSheet.create({})