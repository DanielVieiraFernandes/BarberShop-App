import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeBarber } from '../screens/BarberScreens/HomeBarber/HomeBarber';

const Stack = createStackNavigator();

export function BarbeiroStack() {
  return (
    <Stack.Navigator initialRouteName='HomeBarber' screenOptions={{headerShown: false}}>
        <Stack.Screen name='HomeBarber' component={HomeBarber} />
    </Stack.Navigator>
  )
}