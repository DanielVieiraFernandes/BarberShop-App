import React, { useEffect, useState } from "react";
import {
  Box,
  Text,
} from "../../components/RestyleComponents/RestyleComponents";
import { useTheme } from "@shopify/restyle";
import { Image } from "react-native";
import { Theme } from "../../../theme";
import { Button } from "../../components/Button/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackRoutesList } from "../../routes/AuthStack";
import { useNavigation } from "@react-navigation/native";

import { TouchableHighlight } from "react-native";

import notifee, { AndroidImportance } from "@notifee/react-native";

type NavigationProps = StackNavigationProp<StackRoutesList>;

export function UserSelection() {

  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme<Theme>();
  const barbeiroImage = require("../../../../assets/barber.png");
  const orangeBackground = require("../../../../assets/orangeBackround.png");
  const icon = require("../../../../assets/icone.png");

  const onSubmitBarbeiro = () => {
    navigation.navigate("RegisterBarbeiro");
  };
  const onSubmitCliente = () => {
    navigation.navigate("RegisterClient");
  };

  async function displayNotification() {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'test',
      name: 'sales',
      vibration: true,
      importance: AndroidImportance.HIGH
    });

    await notifee.displayNotification({
      id: '7',
      title: 'Ola Daniel',
      body: 'Essa é minha primeira notificação.',
      android: {
        channelId
      }
    })
  }




  return (

      <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="background"
    >
      <Box flex={1} justifyContent="center" alignItems="center">
        <Image source={icon} style={theme.styles.icon} />
      </Box>
      <Box flex={1} alignItems="center" justifyContent="center">
        <Image source={orangeBackground} style={theme.styles.orangeImage} />
        <Image source={barbeiroImage} style={theme.styles.image} />
      </Box>
      <Box flex={1} justifyContent="center" gap="l">
        <Text variant="logIn">Entrar como:</Text>
        <Button
          buttonProps={{ onPress: () => onSubmitBarbeiro() }}
          title="Barbeiro"
        />
        <Button
          buttonProps={{ onPress: () => onSubmitCliente() }}
          title="Cliente"
        />
        
     
      </Box>
    </Box>
 
  );
}
