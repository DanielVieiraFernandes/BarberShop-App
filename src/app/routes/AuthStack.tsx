import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { SignInClient } from "../screens/SignIn/SignInClient";
import { RegisterBarbeiro } from "../screens/Register/RegisterBarbeiro";
import { UserSelection } from "../screens/UserSelection/UserSelection";
import { SignInBarber } from "../screens/SignIn/SignInBarber";
import { RegisterClient } from "../screens/Register/RegisterClient";

const Stack = createStackNavigator();

export type StackRoutesList = {
  SignInClient?: undefined;
  SignInBarber?: undefined;
  RegisterBarbeiro?: undefined;
  RegisterClient?: undefined;
  UserSelection?: undefined;
};

export function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="UserSelection"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="UserSelection" component={UserSelection} />
      <Stack.Screen name="SignInClient" component={SignInClient} />
      <Stack.Screen name="SignInBarber" component={SignInBarber} />
      <Stack.Screen name="RegisterBarbeiro" component={RegisterBarbeiro} />
      <Stack.Screen name="RegisterClient" component={RegisterClient} />
    </Stack.Navigator>
  );
}
