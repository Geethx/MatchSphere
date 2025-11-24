import React from "react";
import {
  Text as RNText,
  TextProps as RNTextProps,
  StyleSheet,
} from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface TextProps extends RNTextProps {
  variant?: "regular" | "medium" | "bold";
  size?: "xs" | "sm" | "base" | "lg" | "xl";
  color?: string;
  children: React.ReactNode;
}

export const Text: React.FC<TextProps> = ({
  variant = "regular",
  size = "base",
  color,
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const fontWeight = {
    regular: "400" as const,
    medium: "500" as const,
    bold: "700" as const,
  }[variant];

  const fontSize = theme.typography.sizes[size];
  const textColor = color || theme.colors.text;

  return (
    <RNText
      style={[
        {
          fontWeight,
          fontSize,
          color: textColor,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
