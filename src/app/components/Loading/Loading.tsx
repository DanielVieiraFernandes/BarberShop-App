import { ActivityIndicator } from "react-native";
import React from "react";
import { Box } from "../RestyleComponents/RestyleComponents";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";

export function Loading() {
  const theme = useTheme<Theme>();

  return (
    <Box
      flex={1}
      justifyContent="center"
      alignItems="center"
      backgroundColor="background"
    >
      <ActivityIndicator size={32} color={theme.colors.orange} />
    </Box>
  );
}
