import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../../context/AuthContext'

export function HomeBarber() {

  const {signOut} = useAuth();



  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text onPress={() => signOut()}>Home Barbeiro</Text>
    </View>
  )
}