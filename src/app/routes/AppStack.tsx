import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home/Home';
import { Selection } from '../screens/Selection/Selection';

const Stack = createStackNavigator();

export function AppStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Selection' component={Selection} />
    </Stack.Navigator>
  )
}