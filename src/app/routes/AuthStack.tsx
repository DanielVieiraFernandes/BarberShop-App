import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn/SignIn';
import { Register } from '../screens/Register/Register';

const Stack = createStackNavigator();

export function AuthStack() {
  return (
    <Stack.Navigator initialRouteName='SignIn' screenOptions={{headerShown: false}}>
        <Stack.Screen name='SignIn' component={SignIn} />
        <Stack.Screen name='Register' component={Register} />
    </Stack.Navigator>
  )
}