import { View, Text } from 'react-native'
import React from 'react'
import { useAuth } from '../../context/AuthContext'

export function Home() {

  const {signOut} = useAuth();

  console.log("3uwuwuwuwuw")

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: "center"}}>
      <Text onPress={() => signOut()}>Home Barbeiro</Text>
    </View>
  )
}