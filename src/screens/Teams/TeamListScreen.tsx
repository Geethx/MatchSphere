import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import {
  useGetAllLeaguesQuery,
  useGetTeamsByLeagueQuery,
} from "../../api/sportsApi";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";
import { Badge } from "../../components/common/atoms/Badge";

const TeamListScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [selectedLeagueId, setSelectedLeagueId] = useState<string | null>(null);

  const { data: leaguesData, isLoading: leaguesLoading } =
    useGetAllLeaguesQuery();
  const { data: teamsData, isLoading: teamsLoading } = useGetTeamsByLeagueQuery(
    selectedLeagueId || "",
    { skip: !selectedLeagueId }
  );

  const leagues = leaguesData?.leagues?.slice(0, 15) || [];
  const teams = teamsData?.teams || [];

  if (leaguesLoading) {
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
          Teams
        </Heading>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.screenPadding,
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
        }}
      >
        {/* League Selector */}
        <View>
          <Text
            variant="medium"
            size="base"
            style={{ marginBottom: theme.spacing.sm }}
          >
            Select a League
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: theme.spacing.md }}
          >
            {leagues.map(league => (
              <TouchableOpacity
                key={league.idLeague}
                onPress={() => setSelectedLeagueId(league.idLeague)}
                style={{
                  backgroundColor:
                    selectedLeagueId === league.idLeague
                      ? theme.colors.primary
                      : theme.colors.card,
                  paddingHorizontal: theme.spacing.md,
                  paddingVertical: theme.spacing.sm,
                  borderRadius: 20,
                  marginRight: theme.spacing.sm,
                  borderWidth: 2,
                  borderColor:
                    selectedLeagueId === league.idLeague
                      ? theme.colors.primary
                      : theme.colors.border || "transparent",
                  ...theme.shadows.sm,
                }}
              >
                <Text
                  size="sm"
                  style={{
                    color:
                      selectedLeagueId === league.idLeague
                        ? "#FFFFFF"
                        : theme.colors.text,
                  }}
                >
                  {league.strLeague}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <Spacer size={theme.spacing.lg} />

        {/* Teams List */}
        {selectedLeagueId ? (
          teamsLoading ? (
            <LoadingSpinner />
          ) : teams.length > 0 ? (
            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: theme.spacing.md,
                }}
              >
                <Heading level="3">Teams</Heading>
                <Badge label={`${teams.length}`} variant="primary" />
              </View>
              {teams.map(team => (
                <TouchableOpacity
                  key={team.idTeam}
                  onPress={() =>
                    (navigation as any).navigate("TeamDetail", {
                      teamId: team.idTeam,
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
                  {/* Team Banner */}
                  {team.strTeamBanner && (
                    <Image
                      source={{ uri: team.strTeamBanner }}
                      style={{
                        width: "100%",
                        height: 100,
                        backgroundColor: theme.colors.surfaceElevated,
                      }}
                      resizeMode="cover"
                    />
                  )}

                  {/* Team Info */}
                  <View
                    style={{
                      padding: theme.spacing.md,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {team.strTeamBadge && (
                      <Image
                        source={{ uri: team.strTeamBadge }}
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 8,
                          marginRight: theme.spacing.md,
                          backgroundColor: theme.colors.surfaceElevated,
                        }}
                        resizeMode="contain"
                      />
                    )}
                    <View style={{ flex: 1 }}>
                      <Text variant="medium" size="lg">
                        {team.strTeam}
                      </Text>
                      <Spacer size={theme.spacing.xs} />
                      <Text size="sm" color={theme.colors.textTertiary}>
                        Founded {team.intFormedYear || "N/A"}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          ) : (
            <Text color={theme.colors.textSecondary}>
              No teams found for this league
            </Text>
          )
        ) : (
          <Text color={theme.colors.textSecondary}>
            Select a league to view teams
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default TeamListScreen;
