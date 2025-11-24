import React from "react";
import { View } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface DividerProps {
  spacing?: number;
  color?: string;
}

export const Divider: React.FC<DividerProps> = ({ spacing = 0, color }) => {
  const { theme } = useTheme();

  return (
    <View
      style={{
        height: 1,
        backgroundColor: color || theme.colors.border,
        marginVertical: spacing,
      }}
    />
  );
};
