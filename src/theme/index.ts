import { createTheme } from "@shopify/restyle";
import { StyleSheet } from "react-native";

const pallete = {
  orange: "#E95401",
  background: "#1A1A1A",
  white: "#FFF",
  black: "#000",
  grayInput: "#FFFFFF80",
  red: "red",
};

const styles = StyleSheet.create({
  input: {
    width: "80%",
    height: 55,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: pallete.orange,
    fontFamily: "Poppins_700Bold",
    fontSize: 14,
    paddingHorizontal: 10,
    color: pallete.white,
  },
  boxVariant: {
    width: "80%",
    height: 55,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    borderWidth: 1,
    borderColor: pallete.orange,
  },
  buttonAgendar: {
    width: 282,
    height: 50,
    backgroundColor: pallete.orange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  button: {
    width: 200,
    height: 50,
    backgroundColor: pallete.orange,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  image: {
    width: 200,
    height: 300,
    position: "absolute",
  },
  orangeImage: {
    width: "80%",
    height: 300,
    position: "absolute",
  },
  icon: {
    width: 220,
    height: 220,
  },
  checkbox:{
    borderRadius: "100%",
    width: 20,
    height: 19,
    borderColor: pallete.orange,
    marginHorizontal: 10
  }
});

const theme = createTheme({
  colors: {
    orange: pallete.orange,
    background: pallete.background,
    white: pallete.white,
    black: pallete.black,
    grayInput: pallete.grayInput,
    red: pallete.red,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    defaults: {
      fontFamily: "Poppins_500Medium",
      fontSize: 12,
      color: "white",
    },
    error:{
      fontFamily: "Poppins_600SemiBold",
      fontSize: 14,
      color: "red",
    },
    boxBold: {
      fontFamily: "Poppins_900Black",
      fontSize: 24,
      color: "white",
    },
    titleBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 24,
      color: "white",
    },
    inputServiceBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 20,
      color: "white",
    },
    subTitleBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 10,
      color: "white",
    },
    bttSemiBold: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 24,
      color: "white",
    },
    inputSemiBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 14,
      color: "white",
    },
    titleSemiBold: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 20,
      color: "white",
    },
    text: {
      fontFamily: "Poppins_400Regular",
      fontSize: 12,
      color: "white",
    },
    logIn:{
      fontFamily: "Poppins_700Bold",
      fontSize: 16,
      color: "white",
    },
    textCheckBox:{
      fontFamily: "Poppins_700Bold",
      fontSize: 12,
      color: "white",
    }
  },
  styles,
});

export type Theme = typeof theme;
export default theme;
