import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "./Text";

interface BadgeProps {
  label: string;
  variant?: "primary" | "success" | "warning" | "error" | "info" | "neutral";
  size?: "sm" | "md";
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = "neutral",
  size = "sm",
}) => {
  const { theme } = useTheme();

  const getColors = () => {
    switch (variant) {
      case "primary":
        return { bg: theme.colors.primary, text: "#ffffff" };
      case "success":
        return { bg: theme.colors.success, text: "#ffffff" };
      case "warning":
        return { bg: theme.colors.warning, text: "#ffffff" };
      case "error":
        return { bg: theme.colors.error, text: "#ffffff" };
      case "info":
        return { bg: theme.colors.info, text: "#ffffff" };
      case "neutral":
        return { bg: theme.colors.border, text: theme.colors.text };
      default:
        return { bg: theme.colors.border, text: theme.colors.text };
    }
  };

  const colors = getColors();
  const padding = size === "sm" ? 6 : 8;
  const fontSize =
    size === "sm" ? theme.typography.sizes.xs : theme.typography.sizes.sm;

  return (
    <View
      style={{
        backgroundColor: colors.bg,
        paddingHorizontal: padding * 1.5,
        paddingVertical: padding * 0.5,
        borderRadius: 6,
        alignSelf: "flex-start",
      }}
    >
      <Text
        variant="medium"
        style={{
          color: colors.text,
          fontSize,
        }}
      >
        {label}
      </Text>
    </View>
  );
};
