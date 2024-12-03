import React from "react";
import { ActivityIndicator, ScrollView } from "react-native";
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
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackRoutesList } from "../../routes/AuthStack";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../context/AuthContext";

type NavigationProps = StackNavigationProp<StackRoutesList>;

export const signInClientSchema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "A senha deve conter no mínimo seis caracteres"),
});

export type MySignInClientSchema = z.infer<typeof signInClientSchema>;

export function SignInClient() {
  const {signIn, isLoading } = useAuth();


  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<MySignInClientSchema>({
    resolver: zodResolver(signInClientSchema),
    defaultValues: {
     
      email: "", 
      senha: "",
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
          <Text variant="boxBold">Entre agora</Text>
          <Text>
            ou faça{" "}
            <Text
              color="orange"
              onPress={() => navigation.navigate("RegisterClient")}
            >
              o cadastro
            </Text>{" "}
            agora
          </Text>
        </Box>
        <Box flex={1} justifyContent="center" alignItems="center" gap="l">
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
              name: "senha",
              control,
            }}
            inputControl={{
              placeholder: "Senha"
            }}
          />
          {errors.senha && <Text variant="error">{errors.senha.message}</Text>}
        
         
         
        </Box>
        <Box alignItems="center">
        <ButtonB
            title="Entrar"
            buttonProps={{
              onPress: handleSubmit(signIn),
            }}
          />
        </Box>
      </Box>
    </ScrollView>
  );
}
