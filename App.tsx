import { StatusBar } from "expo-status-bar";
import { Router } from "./src/app/routes/Router";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import "react-native-reanimated";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Poppins_500Medium,
  Poppins_400Regular,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useCallback } from "react";

import { AuthProvider } from "./src/app/context/AuthContext";
import {AlertNotification} from "./src/app/context/AlertNotification";
import 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_900Black,
  });

  const onLayoutRootView = useCallback(() => {
    if (fontsLoaded) {
      SplashScreen.hide();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AlertNotification>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <SafeAreaProvider onLayout={onLayoutRootView}>
            <StatusBar
              style="dark"
              translucent
              backgroundColor={theme.colors.orange}
            />
            <Router />
          </SafeAreaProvider>
        </AuthProvider>
      </ThemeProvider>
    </AlertNotification>
  );
}
