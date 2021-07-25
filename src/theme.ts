import {
  extendTheme,
  ThemeConfig,
  withDefaultColorScheme,
} from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const appTheme = extendTheme(
  {
    // colorScheme="primary" variant="solit"   -> light=200, dark=500
    // colorScheme="primary" variant="outline" -> light=200, dark=600
    colors: {
      primary: {
        light: "#455a64",
        dark: "#263238",
        200: "#455a64",
        500: "#263238",
        600: "#263238",
      },
      secondary: {
        light: "#f8bbd0",
        dark: "#e91e63",
        200: "#f8bbd0",
        500: "#e91e63",
        600: "#e91e63",
      },
    },
    config,
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);
