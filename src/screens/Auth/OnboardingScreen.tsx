import React from "react";
import { View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Button } from "../../components/common/atoms/Button";
import { Spacer } from "../../components/common/atoms/Spacer";

const OnboardingScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.background,
      }}
    >
      {/* Hero Section */}
      <View
        style={{
          backgroundColor: theme.colors.primary,
          paddingTop: theme.spacing["3xl"],
          paddingBottom: theme.spacing["2xl"],
          paddingHorizontal: theme.spacing.xl,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          ...theme.shadows.lg,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 64 }}>⚽</Text>
          <Spacer size={theme.spacing.md} />
          <Heading level="1" style={{ color: "#FFFFFF", textAlign: "center" }}>
            MatchSphere
          </Heading>
          <Spacer size={theme.spacing.sm} />
          <Text
            size="lg"
            style={{ color: "rgba(255,255,255,0.9)", textAlign: "center" }}
          >
            Your Sports Universe
          </Text>
        </View>
      </View>

      {/* Content Section */}
      <View
        style={{
          flex: 1,
          paddingHorizontal: theme.spacing.xl,
          paddingTop: theme.spacing["2xl"],
          justifyContent: "space-between",
          paddingBottom: theme.spacing.xl,
        }}
      >
        <View>
          <Spacer size={theme.spacing.lg} />

          {/* Features */}
          <View
            style={{
              backgroundColor: theme.colors.surfaceElevated,
              padding: theme.spacing.lg,
              borderRadius: 16,
              ...theme.shadows.sm,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: theme.spacing.md,
              }}
            >
              <Text style={{ fontSize: 24, marginRight: theme.spacing.sm }}>
                🏆
              </Text>
              <Text variant="medium" size="lg">
                Live Match Scores
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: theme.spacing.md,
              }}
            >
              <Text style={{ fontSize: 24, marginRight: theme.spacing.sm }}>
                👥
              </Text>
              <Text variant="medium" size="lg">
                Teams & Players Info
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={{ fontSize: 24, marginRight: theme.spacing.sm }}>
                ❤️
              </Text>
              <Text variant="medium" size="lg">
                Favourite Your Favorites
              </Text>
            </View>
          </View>

          <Spacer size={theme.spacing.lg} />
          <Text
            size="base"
            color={theme.colors.textSecondary}
            style={{ textAlign: "center", lineHeight: 24 }}
          >
            Stay updated with real-time sports information from leagues around
            the world. Track your favorite teams and never miss a match!
          </Text>
        </View>

        <View>
          <Button
            onPress={() => (navigation as any).navigate("Auth")}
            style={{ paddingVertical: theme.spacing.md }}
          >
            Get Started 🚀
          </Button>
          <Spacer size={theme.spacing.sm} />
          <Text
            size="sm"
            color={theme.colors.textTertiary}
            style={{ textAlign: "center" }}
          >
            Join thousands of sports fans worldwide
          </Text>
        </View>
      </View>
    </View>
  );
};

export default OnboardingScreen;
