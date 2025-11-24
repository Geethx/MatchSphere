import { useColorScheme } from "react-native";
import { useAppSelector } from "../store/hooks";
import { lightTheme, darkTheme, Theme } from "../theme";

export const useTheme = (): { theme: Theme; isDark: boolean } => {
  const systemColorScheme = useColorScheme();
  const themePreference = useAppSelector(state => state.settings.theme);

  const isDark =
    themePreference === "dark" ||
    (themePreference === "system" && systemColorScheme === "dark");

  return {
    theme: isDark ? darkTheme : lightTheme,
    isDark,
  };
};
