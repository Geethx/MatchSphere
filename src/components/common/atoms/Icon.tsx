import React from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "../../../hooks/useTheme";

interface IconProps {
  name: keyof typeof Feather.glyphMap;
  size?: number;
  color?: string;
}

export const Icon: React.FC<IconProps> = ({ name, size = 24, color }) => {
  const { theme } = useTheme();

  return <Feather name={name} size={size} color={color || theme.colors.text} />;
};
