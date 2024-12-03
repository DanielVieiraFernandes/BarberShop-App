import React from 'react'
import { Box, Text } from '../../components/RestyleComponents/RestyleComponents'
import { useAuth } from '../../context/AuthContext'

export  function Home() {

const {signOut} = useAuth();

  return (
    <Box flex={1} justifyContent='center' alignItems='center'>
      <Text color='black' onPress={signOut}>Cliente</Text>
    </Box>
  )
}