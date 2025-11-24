import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useGetAllLeaguesQuery } from "../../api/sportsApi";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";

const LeagueListScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { data, isLoading } = useGetAllLeaguesQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }

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
          Leagues
        </Heading>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.screenPadding,
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
        }}
      >
        <Spacer size={theme.spacing.sm} />
        {data?.leagues && data.leagues.length > 0 ? (
          data.leagues.slice(0, 20).map(league => (
            <TouchableOpacity
              key={league.idLeague}
              onPress={() =>
                (navigation as any).navigate("LeagueDetail", {
                  leagueId: league.idLeague,
                  leagueName: league.strLeague,
                })
              }
              style={{
                backgroundColor: theme.colors.card,
                borderRadius: 12,
                marginBottom: theme.spacing.sm,
                ...theme.shadows.sm,
                overflow: "hidden",
              }}
            >
              {/* Banner Image */}
              {league.strBanner && (
                <Image
                  source={{ uri: league.strBanner }}
                  style={{
                    width: "100%",
                    height: 120,
                    backgroundColor: theme.colors.surfaceElevated,
                  }}
                  resizeMode="cover"
                />
              )}

              {/* Content Section */}
              <View
                style={{
                  padding: theme.spacing.md,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                {league.strBadge && (
                  <Image
                    source={{ uri: league.strBadge }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 8,
                      marginRight: theme.spacing.md,
                      backgroundColor: theme.colors.surfaceElevated,
                    }}
                    resizeMode="contain"
                  />
                )}
                <View style={{ flex: 1 }}>
                  <Text variant="medium" size="lg">
                    {league.strLeague}
                  </Text>
                  <Spacer size={theme.spacing.xs} />
                  <Text size="sm" color={theme.colors.textTertiary}>
                    {league.strSport} • {league.strCountry}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text color={theme.colors.textSecondary}>No leagues available</Text>
        )}
      </ScrollView>
    </View>
  );
};

export default LeagueListScreen;
