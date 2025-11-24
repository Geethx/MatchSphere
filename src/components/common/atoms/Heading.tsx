import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { useTheme } from "../../../hooks/useTheme";

interface HeadingProps extends RNTextProps {
  level?: "1" | "2" | "3" | "4";
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level = "1",
  style,
  children,
  ...props
}) => {
  const { theme } = useTheme();

  const sizes = {
    "1": theme.typography.sizes["3xl"],
    "2": theme.typography.sizes["2xl"],
    "3": theme.typography.sizes.xl,
    "4": theme.typography.sizes.lg,
  };

  return (
    <RNText
      style={[
        {
          fontWeight: "700",
          fontSize: sizes[level],
          color: theme.colors.text,
          lineHeight: sizes[level] * 1.2,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};
