import React from "react";
import { useAuth } from "../context/AuthContext";
import AppNavigator from "./AppNavigator";
import { Loading } from "../components/Loading/Loading";

export function Router() {
 

  return <AppNavigator />;
}
