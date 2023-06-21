// theme.js

// 1. import `extendTheme` function
import { ThemeConfig, extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
};

// 3. extend the theme and import in main.tsx
const theme = extendTheme({
  config,
  colors: {
    gray: {
      50: "#ebf7f9",
      100: "#c9dbe9",
      200: "#a6c4db",
      300: "#81accd",
      400: "#5f95c1",
      500: "#487ca7",
      600: "#386082",
      700: "#29445b",
      800: "#182a37",
      900: "#060e14",
    },
  },
});

export default theme;
