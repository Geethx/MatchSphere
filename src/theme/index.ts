import { lightColors, darkColors, ThemeColors } from "./colors";
import { typography, Typography } from "./typography";
import { spacing, Spacing } from "./spacing";
import { shadows, Shadows } from "./shadows";

export interface Theme {
  colors: ThemeColors;
  typography: Typography;
  spacing: Spacing;
  shadows: Shadows;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: lightColors,
  typography,
  spacing,
  shadows,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: darkColors,
  typography,
  spacing,
  shadows,
  isDark: true,
};

export * from "./colors";
export * from "./typography";
export * from "./spacing";
export * from "./shadows";
