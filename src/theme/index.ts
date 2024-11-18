import { createTheme } from "@shopify/restyle";

const pallete = {
  orange: "#E95401",
  background: "#1A1A1A",
  white: "#FFF",
  black: "#000",
};

const theme = createTheme({
  colors: {
    orange: pallete.orange,
    background: pallete.background,
    white: pallete.white,
    black: pallete.black,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    default: {
      fontFamily: "Poppins_500Medium",
      fontSize: 12,
      color: pallete.white,
    },
    boxBold: {
      fontFamily: "Poppins_900Black",
      fontSize: 24,
      color: pallete.white,
    },
    titleBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 24,
      color: pallete.white,
    },
    inputServiceBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 20,
      color: pallete.white,
    },
    subTitleBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 10,
      color: pallete.white,
    },
    bttSemiBold: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 24,
      color: pallete.white,
    },
    inputSemiBold: {
      fontFamily: "Poppins_700Bold",
      fontSize: 14,
      color: pallete.white,
    },
    titleSemiBold: {
      fontFamily: "Poppins_600SemiBold",
      fontSize: 20,
      color: pallete.white,
    },
    text: {
      fontFamily: "Poppins_400Regular",
      fontSize: 12,
      color: pallete.white,
    },
  },
  input: {
    width: "80%",
    height: 55,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: pallete.orange,
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
    ustifyContent: "center",
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
});

export type Theme = typeof theme;
export default theme;
