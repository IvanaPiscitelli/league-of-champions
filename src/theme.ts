// theme.js

// 1. import `extendTheme` function
import { ThemeConfig, extendTheme } from "@chakra-ui/react";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
};

// 3. extend the theme and import in main.tsx
const theme = extendTheme({ config });

export default theme;
