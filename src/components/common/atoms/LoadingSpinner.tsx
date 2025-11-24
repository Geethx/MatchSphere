import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface LoadingSpinnerProps {
  size?: "small" | "large";
  color?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "large",
  color,
}) => {
  const { theme } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size={size} color={color || theme.colors.primary} />
    </View>
  );
};
