import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import { BarbeiroStack } from "./BarbeiroStack";
import { ClienteStack } from "./ClienteStack";
import { AuthStack } from "./AuthStack";
import { Loading } from "../components/Loading/Loading";

export function Router() {
  const { userBarber, userClient, isLoading } = useAuth();

  if(isLoading){
    return <Loading />
  }

  console.log("fniasenfioasen")

  return (
    <NavigationContainer>
      {userBarber ? (
        <BarbeiroStack />
      ) : userClient ? (
        <ClienteStack />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
}
