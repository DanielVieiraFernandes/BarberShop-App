import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { ActivityIndicator } from "react-native";
import { Box } from "../components/RestyleComponents/RestyleComponents";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme";
import AppNavigator from "./AppNavigator";

export function Router() {

  const {  isLoading } = useAuth();
  const theme = useTheme<Theme>();

  if (isLoading) {
    return (
      <Box
        flex={1}
        backgroundColor="background"
        justifyContent="center"
        alignItems="center"
      >
        <ActivityIndicator size={34} color={theme.colors.orange} />
      </Box>
    );
  }

  return <AppNavigator />;
}
