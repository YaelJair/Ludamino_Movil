import { View, Text } from 'react-native';
import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native"
import { DrawerNavigation } from './src/navigation/DrawerNavigation';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  )
}

export default App
