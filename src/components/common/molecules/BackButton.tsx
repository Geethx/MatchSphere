import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "../atoms/Icon";
import { useTheme } from "../../../hooks/useTheme";

export const BackButton: React.FC = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: theme.colors.card,
        justifyContent: "center",
        alignItems: "center",
        ...theme.shadows.sm,
        marginBottom: theme.spacing.md,
      }}
    >
      <Icon name="arrow-left" size={20} color={theme.colors.text} />
    </TouchableOpacity>
  );
};
