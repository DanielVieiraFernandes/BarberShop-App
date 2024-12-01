import React, { useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
} from "react-native";
import {
  Box,
  Text,
} from "../../components/RestyleComponents/RestyleComponents";
import { Header } from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { ButtonB } from "../../components/Button/ButtonB";
import Checkbox from "expo-checkbox";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackRoutesList } from "../../routes/AuthStack";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

type NavigationProps = StackNavigationProp<StackRoutesList>;

export const clientSchema = z.object({
  nome: z.string().min(3, "Nome inválido"),
  email: z.string().email("Email inválido"),
  telefone: z
    .string()
    .regex(
      /^\(?[1-9]{2}\)?\s?(?:9[1-9]\d{3}|[2-8]\d{3})-?\d{4}$/,
      "Número de telefone inválido!"
    ),
  senha: z.string().min(6, "A senha deve conter no mínimo seis caracteres"),
  isChecked: z.boolean().refine((val) => val === true, {
    message: "Você deve aceitar os termos de uso.",
  }),
});

export type MyClientSchema = z.infer<typeof clientSchema>;

export function RegisterClient() {
  const [isChecked, setChecked] = useState<boolean>(false);
  const { cadastrarCliente, isLoading } = useAuth();

  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<MyClientSchema>({
    resolver: zodResolver(clientSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      senha: "",
      isChecked: false,
    },
  });
  const navigation = useNavigation<NavigationProps>();
  const theme = useTheme<Theme>();

  if (isLoading) {
    return (
      <Box backgroundColor="background" opacity={50}>
        <ActivityIndicator size={30} color={theme.colors.red} />
      </Box>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Box flex={1} backgroundColor="background">
        <Header />
        <Box alignItems="center" marginVertical="xl">
          <Text variant="boxBold">Cadastre-se agora</Text>
          <Text>
            ou faça{" "}
            <Text
              color="orange"
              onPress={() => navigation.navigate("SignInClient")}
            >
              login
            </Text>{" "}
            agora
          </Text>
        </Box>
        <Box flex={1} alignItems="center" gap="l">
          <Input
            formControl={{
              name: "nome",
              control,
            }}
            inputControl={{ placeholder: "Nome Completo" }}
          />
          {errors.nome && <Text variant="error">{errors.nome.message}</Text>}
          <Input
            formControl={{
              name: "email",
              control,
            }}
            inputControl={{ placeholder: "Email" }}
          />
          {errors.email && <Text variant="error">{errors.email.message}</Text>}

          <Input
            formControl={{
              name: "telefone",
              control,
            }}
            inputControl={{ placeholder: "Telefone" }}
          />
          {errors.telefone && (
            <Text variant="error">{errors.telefone.message}</Text>
          )}

          <Input
            formControl={{
              name: "senha",
              control,
            }}
            inputControl={{
              placeholder: "Crie uma senha",
              secureTextEntry: true,
            }}
          />
          {errors.senha && <Text variant="error">{errors.senha.message}</Text>}
          <Box flexDirection="row" alignItems="center">
            <Checkbox
              value={isChecked}
              onValueChange={(value) => {
                setChecked(value);
                setValue("isChecked", value);
              }}
              color={isChecked ? theme.colors.orange : ""}
              style={theme.styles.checkbox}
            />
            <Text variant="textCheckBox">
              Aceito os termos de uso e diretrizes do app
            </Text>
          </Box>
          {errors.isChecked && (
            <Text variant="error">{errors.isChecked.message}</Text>
          )}
          <ButtonB
            title="Cadastrar"
            buttonProps={{
              onPress: handleSubmit(cadastrarCliente),
            }}
          />
        </Box>
      </Box>
    </ScrollView>
  );
}
