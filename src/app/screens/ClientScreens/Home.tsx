import React from 'react'
import { Box, Text } from '../../components/RestyleComponents/RestyleComponents'
import { useAuth } from '../../context/AuthContext'
import { Header } from '../../components/Header/Header';

export function Home() {

const {signOut} = useAuth();


  return (
    <Box flex={1} backgroundColor='background'>

      <Box flex={1} alignItems='center' justifyContent='center'>
        <Text onPress={signOut}>Ola</Text>
      </Box>
    </Box>
  )
}