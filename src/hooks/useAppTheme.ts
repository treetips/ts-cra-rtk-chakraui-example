import { ColorMode, useColorMode, useColorModeValue } from "@chakra-ui/react";
import Cookie from "js-cookie";
import { useEffect, useState } from "react";
import { AppCookie } from "../types";

const defaultTheme: ColorMode = "light";

/**
 * Hooks for application color theme
 * @author treetips
 */
export const useAppTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isInit, setInit] = useState(false);
  const { theme } = AppCookie;

  /**
   * Restore settings from existing cookie values at startup.
   */
  useEffect(() => {
    if (isInit === false) {
      const currentTheme = Cookie.get(theme.name) as ColorMode;
      const restoreTheme = ((t: ColorMode) => {
        if (t === "light" || t === "dark") {
          return t;
        }
        // If the cookie value is not a constant value, overwrite it with the default value
        return defaultTheme;
      })(currentTheme);

      Cookie.set(theme.name, restoreTheme, {
        sameSite: "Lax",
        expires: theme.expired,
      });
      setInit(true);
    }
  }, [isInit, theme.expired, theme.name]);

  /**
   * Overwrite cookies to follow color mode changes.
   */
  useEffect(() => {
    if (isInit === true) {
      Cookie.set(theme.name, colorMode, {
        sameSite: "Lax",
        expires: theme.expired,
      });
    }
  }, [colorMode, isInit, theme.expired, theme.name]);

  /**
   * Toggle theme
   */
  const toggleTheme = () => {
    toggleColorMode();
  };

  return {
    theme: {
      primary: {
        bg: useColorModeValue("primary.dark", "primary.light"),
        color: useColorModeValue("white", "gray.300"),
        borderColor: useColorModeValue("gray.300", "gray.200"),
        hover: {
          bg: useColorModeValue("primary.light", "primary.dark"),
          color: useColorModeValue("gray.300", "white"),
          borderColor: useColorModeValue("gray.200", "gray.300"),
        },
      },
      secondary: {
        bg: useColorModeValue("secondary.dark", "secondary.light"),
        color: useColorModeValue("white", "gray.800"),
        borderColor: useColorModeValue("gray.200", "gray.200"),
        hover: {
          bg: useColorModeValue("secondary.light", "secondary.dark"),
          color: useColorModeValue("gray.800", "white"),
          borderColor: useColorModeValue("gray.200", "gray.300"),
        },
      },
    },
    appTheme: {
      colorMode,
      defaultTheme,
      toggleTheme,
    },
  } as const;
};

/** Application theme props type */
export type AppThemeType = ReturnType<typeof useAppTheme>["theme"];
