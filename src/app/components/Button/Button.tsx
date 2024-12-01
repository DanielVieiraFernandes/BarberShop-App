import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Text } from "../RestyleComponents/RestyleComponents";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";

type Props = {
  buttonProps?: TouchableOpacityProps;
  title?: string;
};

export function Button({ title, buttonProps}: Props) {
  const theme = useTheme<Theme>();

  return (
    <TouchableOpacity
      style={[theme.styles.buttonAgendar]}
      {...buttonProps}
    >
      <Text variant="inputSemiBold">{title}</Text>
    </TouchableOpacity>
  );
}
