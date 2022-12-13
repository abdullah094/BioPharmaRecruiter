import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import StackNavigator from './src/navigator/StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { MenuProvider } from 'react-native-popup-menu';
const App = () => {
  console.log('testing app');

  return (
    <MenuProvider>
    <NavigationContainer>
<StackNavigator/>
    </NavigationContainer>
    </MenuProvider>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
