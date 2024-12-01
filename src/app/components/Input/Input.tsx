import {
  TextInput,
  TextInputProps,
} from "react-native";
import React from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";


type Props = {
  formControl: UseControllerProps<any>; 
  inputControl?: TextInputProps; 
};

export function Input({ formControl, inputControl }: Props) {
  const theme = useTheme<Theme>();

  return (
    <Controller
      render={({field: {onChange, onBlur, value}}) => (
        <TextInput
          style={theme.styles.input}
          placeholderTextColor={theme.colors.grayInput}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          {...inputControl} 
        />
      )}
      {...formControl}
    />
  );
}
