import React from "react";
import { View, ScrollView, Image, TouchableOpacity } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import {
  useLookupLeagueQuery,
  useGetTeamsByLeagueQuery,
} from "../../api/sportsApi";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";
import { Badge } from "../../components/common/atoms/Badge";
import { BackButton } from "../../components/common/molecules/BackButton";

const LeagueDetailScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { leagueId, leagueName } = route.params as {
    leagueId: string;
    leagueName: string;
  };

  const { data: leagueData, isLoading: loadingLeague } =
    useLookupLeagueQuery(leagueId);
  const { data: teamsData, isLoading: loadingTeams } =
    useGetTeamsByLeagueQuery(leagueName);

  if (loadingLeague) {
    return <LoadingSpinner />;
  }

  const league = leagueData?.leagues?.[0];

  if (!league) {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme.colors.background,
          justifyContent: "center",
          alignItems: "center",
          padding: theme.spacing.lg,
        }}
      >
        <Text color={theme.colors.textSecondary}>
          Could not load league details
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: theme.colors.background }}
      contentContainerStyle={{
        paddingHorizontal: theme.spacing.screenPadding,
        paddingTop: theme.spacing.screenPaddingTop,
        paddingBottom: theme.spacing.lg,
      }}
    >
      <BackButton />
      {/* League Banner */}
      {league.strBanner && (
        <>
          <Image
            source={{ uri: league.strBanner }}
            style={{
              width: "100%",
              height: 150,
              borderRadius: 12,
            }}
            resizeMode="cover"
          />
          <Spacer size={theme.spacing.lg} />
        </>
      )}

      {/* League Logo and Name */}
      <View style={{ alignItems: "center" }}>
        {league.strBadge && (
          <>
            <Image
              source={{ uri: league.strBadge }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 12,
              }}
              resizeMode="contain"
            />
            <Spacer size={theme.spacing.lg} />
          </>
        )}
        <Heading level="1">{league.strLeague}</Heading>
        <Spacer size={theme.spacing.sm} />
        {league.strLeagueAlternate && (
          <>
            <Text size="lg" color={theme.colors.textSecondary}>
              {league.strLeagueAlternate}
            </Text>
            <Spacer size={theme.spacing.sm} />
          </>
        )}
        <View
          style={{
            flexDirection: "row",
            gap: theme.spacing.sm,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {league.strSport && (
            <Badge label={league.strSport} variant="primary" />
          )}
          {league.strCountry && (
            <Badge label={league.strCountry} variant="info" />
          )}
          {league.strCurrentSeason && (
            <Badge label={league.strCurrentSeason} variant="neutral" />
          )}
        </View>
      </View>

      <Spacer size={theme.spacing.xl} />

      {/* League Info */}
      <View
        style={{
          backgroundColor: theme.colors.card,
          padding: theme.spacing.md,
          borderRadius: 12,
          ...theme.shadows.sm,
        }}
      >
        <Heading level="3">League Information</Heading>
        <Spacer size={theme.spacing.md} />

        {league.intFormedYear && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Founded</Text>
              <Text variant="medium">{league.intFormedYear}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {league.dateFirstEvent && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>First Event</Text>
              <Text variant="medium">{league.dateFirstEvent}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {league.strGender && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text color={theme.colors.textSecondary}>Gender</Text>
            <Text variant="medium">{league.strGender}</Text>
          </View>
        )}
      </View>

      {/* Description */}
      {league.strDescriptionEN && (
        <>
          <Spacer size={theme.spacing.xl} />
          <View
            style={{
              backgroundColor: theme.colors.card,
              padding: theme.spacing.md,
              borderRadius: 12,
              ...theme.shadows.sm,
            }}
          >
            <Heading level="3">About</Heading>
            <Spacer size={theme.spacing.md} />
            <Text>{league.strDescriptionEN}</Text>
          </View>
        </>
      )}

      {/* Teams in League */}
      {teamsData?.teams && teamsData.teams.length > 0 && (
        <>
          <Spacer size={theme.spacing.xl} />
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Heading level="3">Teams</Heading>
              <Badge label={`${teamsData.teams.length}`} variant="primary" />
            </View>
            <Spacer size={theme.spacing.md} />
            {loadingTeams ? (
              <LoadingSpinner />
            ) : (
              teamsData.teams.slice(0, 10).map(team => (
                <TouchableOpacity
                  key={team.idTeam}
                  onPress={() =>
                    (navigation as any).navigate("TeamDetail", {
                      teamId: team.idTeam,
                    })
                  }
                  style={{
                    backgroundColor: theme.colors.card,
                    padding: theme.spacing.md,
                    borderRadius: 12,
                    marginBottom: theme.spacing.sm,
                    ...theme.shadows.sm,
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
                      }}
                      resizeMode="contain"
                    />
                  )}
                  <View style={{ flex: 1 }}>
                    <Text variant="medium" size="lg">
                      {team.strTeam}
                    </Text>
                    {team.strStadium && (
                      <>
                        <Spacer size={theme.spacing.xs} />
                        <Text size="sm" color={theme.colors.textTertiary}>
                          {team.strStadium}
                        </Text>
                      </>
                    )}
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default LeagueDetailScreen;
