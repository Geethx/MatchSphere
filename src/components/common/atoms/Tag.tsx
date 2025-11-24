import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Text } from "./Text";

interface TagProps {
  label: string;
  isSelected?: boolean;
  onPress?: () => void;
}

export const Tag: React.FC<TagProps> = ({
  label,
  isSelected = false,
  onPress,
}) => {
  const { theme } = useTheme();

  const Component = onPress ? TouchableOpacity : View;

  return (
    <Component
      onPress={onPress}
      style={{
        backgroundColor: isSelected
          ? theme.colors.primary
          : theme.colors.surfaceElevated,
        paddingHorizontal: theme.spacing.md,
        paddingVertical: theme.spacing.sm,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: isSelected ? theme.colors.primary : theme.colors.border,
      }}
    >
      <Text
        variant="medium"
        size="sm"
        style={{
          color: isSelected ? "#ffffff" : theme.colors.text,
        }}
      >
        {label}
      </Text>
    </Component>
  );
};
