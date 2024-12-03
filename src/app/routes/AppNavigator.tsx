import React from "react";
import { useAuth } from "../context/AuthContext";
import { BarbeiroStack } from "./BarbeiroStack";
import { ClienteStack } from "./ClienteStack";
import { AuthStack } from "./AuthStack";
import { NavigationContainer } from "@react-navigation/native";
import { Loading } from "../components/Loading/Loading";

export default function AppNavigator() {
  const { userBarber, userClient, isLoading } = useAuth();

console.log("wwwww")

  if(isLoading){
    return <Loading />
  }



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
