import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Icon } from "../atoms/Icon";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  value,
  onChangeText,
  placeholder = "Search...",
}) => {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: theme.colors.surfaceElevated,
          borderRadius: 12,
          paddingHorizontal: theme.spacing.md,
          height: 48,
          gap: 12,
        },
        theme.shadows.sm,
      ]}
    >
      <Icon name="search" size={20} color={theme.colors.textTertiary} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.textTertiary}
        style={{
          flex: 1,
          fontFamily: theme.typography.fonts.regular,
          fontSize: theme.typography.sizes.base,
          color: theme.colors.text,
        }}
      />
    </View>
  );
};
