import React, { useState } from "react";
import {
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useLoginMutation } from "../../api/authApi";
import { useAppDispatch } from "../../store/hooks";
import { setCredentials } from "../../store/features/authSlice";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Button } from "../../components/common/atoms/Button";
import { Spacer } from "../../components/common/atoms/Spacer";

const LoginScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const [login, { isLoading }] = useLoginMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setError("");
      const result = await login({ username, password }).unwrap();
      dispatch(setCredentials({ user: result, token: result.token }));
    } catch (err: any) {
      setError(err?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {/* Header */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          paddingTop: theme.spacing["2xl"],
          paddingBottom: theme.spacing.xl,
          paddingHorizontal: theme.spacing.xl,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          ...theme.shadows.md,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 48 }}>👋</Text>
          <Spacer size={theme.spacing.sm} />
          <Heading level="1" style={{ color: "#FFFFFF", textAlign: "center" }}>
            Welcome Back
          </Heading>
          <Spacer size={theme.spacing.xs} />
          <Text
            size="lg"
            style={{ color: "rgba(255,255,255,0.9)", textAlign: "center" }}
          >
            Sign in to continue your journey
          </Text>
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          padding: theme.spacing.xl,
          paddingTop: theme.spacing["2xl"],
        }}
      >
        {/* Login Card */}
        <View
          style={{
            backgroundColor: theme.colors.card,
            padding: theme.spacing.xl,
            borderRadius: 20,
            ...theme.shadows.lg,
          }}
        >
          <View style={{ marginBottom: theme.spacing.md }}>
            <Text
              variant="medium"
              size="base"
              style={{ marginBottom: theme.spacing.xs }}
            >
              Username
            </Text>
            <TextInput
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
              placeholderTextColor={theme.colors.textTertiary}
              autoCapitalize="none"
              style={{
                backgroundColor: theme.colors.surfaceElevated,
                borderRadius: 12,
                padding: theme.spacing.md,
                fontFamily: theme.typography.fonts.regular,
                fontSize: theme.typography.sizes.base,
                color: theme.colors.text,
                borderWidth: 2,
                borderColor: "transparent",
              }}
            />
          </View>

          <View>
            <Text
              variant="medium"
              size="base"
              style={{ marginBottom: theme.spacing.xs }}
            >
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor={theme.colors.textTertiary}
              secureTextEntry
              style={{
                backgroundColor: theme.colors.surfaceElevated,
                borderRadius: 12,
                padding: theme.spacing.md,
                fontFamily: theme.typography.fonts.regular,
                fontSize: theme.typography.sizes.base,
                color: theme.colors.text,
                borderWidth: 2,
                borderColor: "transparent",
              }}
            />
          </View>

          <Spacer size={theme.spacing.xl} />

          {error ? (
            <>
              <View
                style={{
                  backgroundColor: theme.colors.error + "20",
                  padding: theme.spacing.md,
                  borderRadius: 8,
                  borderLeftWidth: 4,
                  borderLeftColor: theme.colors.error,
                }}
              >
                <Text color={theme.colors.error}>⚠️ {error}</Text>
              </View>
              <Spacer size={theme.spacing.md} />
            </>
          ) : null}

          <Button
            onPress={handleLogin}
            isLoading={isLoading}
            style={{ paddingVertical: theme.spacing.sm }}
          >
            Sign In
          </Button>
        </View>

        <Spacer size={theme.spacing.xl} />

        {/* Sign Up Link */}
        <View style={{ alignItems: "center" }}>
          <Text color={theme.colors.textSecondary}>
            Don't have an account?{" "}
          </Text>
          <Spacer size={theme.spacing.sm} />
          <Button
            variant="outline"
            onPress={() => (navigation as any).navigate("Register")}
          >
            Create Account
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
