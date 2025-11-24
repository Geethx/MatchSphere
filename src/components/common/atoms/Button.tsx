import React from "react";
import {
  TouchableOpacity,
  TouchableOpacityProps,
  ActivityIndicator,
  StyleSheet,
  View,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "./Text";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const heights = {
    sm: 36,
    md: 44,
    lg: 52,
  };

  const paddingHorizontal = {
    sm: theme.spacing.md,
    md: theme.spacing.lg,
    lg: theme.spacing.xl,
  };

  const fontSize = {
    sm: theme.typography.sizes.sm,
    md: theme.typography.sizes.base,
    lg: theme.typography.sizes.lg,
  };

  const getBackgroundColor = () => {
    if (disabled) return theme.colors.border;

    switch (variant) {
      case "primary":
        return theme.colors.primary;
      case "secondary":
        return theme.colors.accent;
      case "outline":
        return "transparent";
      case "ghost":
        return "transparent";
      default:
        return theme.colors.primary;
    }
  };

  const getTextColor = () => {
    if (disabled) return theme.colors.textTertiary;

    switch (variant) {
      case "primary":
      case "secondary":
        return "#ffffff";
      case "outline":
      case "ghost":
        return theme.colors.primary;
      default:
        return "#ffffff";
    }
  };

  const getBorderWidth = () => {
    return variant === "outline" ? 2 : 0;
  };

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      style={[
        {
          height: heights[size],
          paddingHorizontal: paddingHorizontal[size],
          backgroundColor: getBackgroundColor(),
          borderRadius: 12,
          borderWidth: getBorderWidth(),
          borderColor: theme.colors.primary,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          opacity: disabled ? 0.5 : 1,
        },
        theme.shadows.sm,
        style,
      ]}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator color={getTextColor()} />
      ) : (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          {leftIcon}
          <Text
            variant="medium"
            style={{
              color: getTextColor(),
              fontSize: fontSize[size],
            }}
          >
            {children}
          </Text>
          {rightIcon}
        </View>
      )}
    </TouchableOpacity>
  );
};
