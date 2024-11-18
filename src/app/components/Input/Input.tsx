import {
  TextInput,
  TextInputProps,
  ViewProps,
} from "react-native";
import React, { ReactNode } from "react";
import { Controller, UseControllerProps } from "react-hook-form";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";
import { Box } from "../RestyleComponents/RestyleComponents";

type Props = {
  formControl: UseControllerProps;
  inputControl: TextInputProps;
};

type InputProps = {
  children?: ReactNode;
  style?: ViewProps["style"];
};

export function Input({ children, style }: InputProps) {
  return <Box style={style}>{children}</Box>;
}

function Field({ formControl, inputControl }: Props) {

  const theme = useTheme<Theme>();

  return (
    <Controller
      render={() => (
        <TextInput
          style={theme.styles.input}
          placeholderTextColor={theme.colors.grayInput}
          {...inputControl}
        />
      )}
      {...formControl}
    />
  );
}

Input.Field = Field;
