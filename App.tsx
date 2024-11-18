import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Router } from "./src/app/routes/Router";
import { ThemeProvider } from "@shopify/restyle";
import theme from "./src/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
import { Box } from "./src/app/components/RestyleComponents/RestyleComponents";
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
    <ThemeProvider theme={theme}>
      <SafeAreaProvider onLayout={onLayoutRootView}>
       <Box flex={1}>
       <StatusBar
          style="dark"
          translucent
          backgroundColor={theme.colors.orange}
        />
        <Router />
       </Box>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
