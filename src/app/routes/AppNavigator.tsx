import React from "react";
import { useAuth } from "../context/AuthContext";
import { BarbeiroStack } from "./BarbeiroStack";
import { ClienteStack } from "./ClienteStack";
import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";

export default function AppNavigator() {
  const { userBarber, userClient, notUser } = useAuth();

  return (
    <NavigationContainer>
      {userBarber ? (
        <BarbeiroStack />
      ) : userClient ? (
        <ClienteStack />
      ) : notUser ? (
        <AuthStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
