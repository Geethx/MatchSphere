import React from "react";
import { View, ScrollView } from "react-native";
import { useAppDispatch } from "../../store/hooks";
import { useAppSelector } from "../../store/hooks";
import { logout } from "../../store/features/authSlice";
import { setTheme } from "../../store/features/settingsSlice";
import { useTheme } from "../../hooks/useTheme";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Button } from "../../components/common/atoms/Button";
import { Spacer } from "../../components/common/atoms/Spacer";
import { Avatar } from "../../components/common/atoms/Avatar";

const ProfileScreen = () => {
  const dispatch = useAppDispatch();
  const { theme, isDark } = useTheme();
  const user = useAppSelector(state => state.auth.user);
  const themePreference = useAppSelector(state => state.settings.theme);

  const handleLogout = () => {
    dispatch(logout());
  };

  const toggleTheme = () => {
    dispatch(setTheme(isDark ? "light" : "dark"));
  };

  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          paddingHorizontal: theme.spacing.screenPadding,
          paddingTop: theme.spacing.screenPaddingTop,
          paddingBottom: theme.spacing.lg,
          ...theme.shadows.md,
        }}
      >
        <Heading level="1" style={{ color: "#FFFFFF", textAlign: "center" }}>
          Profile
        </Heading>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.screenPadding,
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
        }}
      >
        {/* Profile Header */}
        <View
          style={{ alignItems: "center", paddingVertical: theme.spacing.xl }}
        >
          <Avatar name={user?.username || "User"} size={80} />
          <Spacer size={theme.spacing.md} />
          <Heading level="2">{user?.username}</Heading>
          <Spacer size={theme.spacing.xs} />
          <Text color={theme.colors.textSecondary}>{user?.email}</Text>
        </View>
        <Spacer size={theme.spacing.xl} />

        {/* Settings */}
        <View
          style={{
            backgroundColor: theme.colors.card,
            padding: theme.spacing.lg,
            borderRadius: 12,
            ...theme.shadows.sm,
          }}
        >
          <Heading level="4">Settings</Heading>
          <Spacer size={theme.spacing.lg} />

          {/* Theme Toggle */}
          <View>
            <Text variant="medium" size="lg">
              Theme
            </Text>
            <Spacer size={theme.spacing.sm} />
            <Button
              variant="outline"
              onPress={toggleTheme}
              leftIcon={
                <Text style={{ fontSize: 20 }}>{isDark ? "🌙" : "☀️"}</Text>
              }
            >
              {isDark ? "Dark Mode" : "Light Mode"}
            </Button>
          </View>
        </View>
        <Spacer size={theme.spacing.xl} />

        {/* Logout */}
        <Button variant="secondary" onPress={handleLogout}>
          Logout
        </Button>
        <Spacer size={theme.spacing["2xl"]} />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
