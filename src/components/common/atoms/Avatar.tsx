import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "./Text";

interface AvatarProps {
  name: string;
  size?: number;
  uri?: string;
  backgroundColor?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  name,
  size = 40,
  uri,
  backgroundColor,
}) => {
  const { theme } = useTheme();

  const initials = name
    .split(" ")
    .map(word => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor || theme.colors.primary,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <Text
        variant="bold"
        style={{
          color: "#ffffff",
          fontSize: size * 0.4,
        }}
      >
        {initials}
      </Text>
    </View>
  );
};
