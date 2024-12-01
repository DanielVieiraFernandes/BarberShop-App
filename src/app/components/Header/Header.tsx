import React from "react";
import { Box } from "../RestyleComponents/RestyleComponents";
import Ionicons from "@expo/vector-icons/Ionicons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../../theme";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Header() {
  const theme = useTheme<Theme>();
  const icon = require("../../../../assets/icone.png");
  const navigation = useNavigation();
  return (
    <Box justifyContent="space-around" alignItems="center" flexDirection="row">
      <Ionicons
        name="chevron-back-sharp"
        onPress={() => navigation.goBack()}
        size={34}
        color={theme.colors.orange}
      />
      <Image
        source={icon}
        style={{ width: 150, height: 150, position: "relative", top: 35 }}
      />
      <AntDesign name="instagram" size={24} color={theme.colors.orange} />
    </Box>
  );
}