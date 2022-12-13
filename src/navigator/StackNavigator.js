import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Dashboard from '../screens/Dashboard';
import DrawerNavigator from './DrawerNavigator';
import LeadsReport from '../screens/LeadsReport';

const Stack = createNativeStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="DrawerNavigator" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Login" component={Login}/>
    <Stack.Screen name="DrawerNavigator" component={DrawerNavigator}/>
    <Stack.Screen name="LeadsReport" component={LeadsReport}/>
  </Stack.Navigator>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})