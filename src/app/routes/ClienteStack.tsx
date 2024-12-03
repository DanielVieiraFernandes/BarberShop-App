import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/ClientScreens/Home';

const Stack = createStackNavigator();

export function ClienteStack() {
  return (
    <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  )
}