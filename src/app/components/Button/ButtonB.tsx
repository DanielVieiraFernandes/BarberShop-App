import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import React from "react";
import { Box, Text } from "../RestyleComponents/RestyleComponents";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";
import { useAuth } from "../../context/AuthContext";

type Props = {
  buttonProps?: TouchableOpacityProps;
  title?: string;
};

export function ButtonB({ title, buttonProps }: Props) {
  const theme = useTheme<Theme>();
  const { isButtonLoading } = useAuth();

  return (
    <TouchableOpacity
      style={[theme.styles.button, { marginBottom: 25 }]}
      {...buttonProps}
    >
      {isButtonLoading ? (
        <Box>
          <ActivityIndicator size={20} color={theme.colors.white} />
        </Box>
      ) : (
        <Text variant="inputSemiBold">{title}</Text>
      )}
    </TouchableOpacity>
  );
}
