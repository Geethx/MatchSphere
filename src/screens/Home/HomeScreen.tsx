import React from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useAppSelector } from "../../store/hooks";
import {
  useGetEventsTodayQuery,
  useGetLeagueNextEventsQuery,
  useGetLeaguePreviousEventsQuery,
} from "../../api/sportsApi";
import { getTodayDateString } from "../../utils/date";
import { DEFAULT_LEAGUE_ID, DEFAULT_SPORT } from "../../utils/constants";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";
import { Badge } from "../../components/common/atoms/Badge";

const HomeScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const user = useAppSelector(state => state.auth.user);

  const { data: todayMatches, isLoading: loadingToday } =
    useGetEventsTodayQuery({
      date: getTodayDateString(),
      sport: DEFAULT_SPORT,
    });

  const { data: upcomingMatches, isLoading: loadingUpcoming } =
    useGetLeagueNextEventsQuery(DEFAULT_LEAGUE_ID);

  const { data: recentMatches, isLoading: loadingRecent } =
    useGetLeaguePreviousEventsQuery(DEFAULT_LEAGUE_ID);

  if (loadingToday && loadingUpcoming && loadingRecent) {
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
        <Heading level="1" style={{ color: "#FFFFFF" }}>
          Hi, {user?.username || "Guest"}! 👋
        </Heading>
        <Spacer size={theme.spacing.xs} />
        <Text size="base" style={{ color: "rgba(255,255,255,0.9)" }}>
          Welcome back to MatchSphere
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.screenPadding,
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
        }}
      >
        {/* Today's Matches */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Heading level="3">Today's Matches</Heading>
            <Badge
              label={`${todayMatches?.events?.length || 0}`}
              variant="primary"
            />
          </View>
          <Spacer size={theme.spacing.md} />
          {todayMatches?.events && todayMatches.events.length > 0 ? (
            todayMatches.events.slice(0, 5).map(match => (
              <TouchableOpacity
                key={match.idEvent}
                onPress={() =>
                  (navigation as any).navigate("MatchDetail", {
                    matchId: match.idEvent,
                  })
                }
                style={{
                  backgroundColor: theme.colors.card,
                  padding: theme.spacing.md,
                  borderRadius: 12,
                  marginBottom: theme.spacing.sm,
                  ...theme.shadows.sm,
                }}
              >
                {match.strThumb && (
                  <>
                    <Image
                      source={{ uri: match.strThumb }}
                      style={{
                        width: "100%",
                        height: 120,
                        borderRadius: 8,
                        marginBottom: theme.spacing.sm,
                      }}
                      resizeMode="cover"
                    />
                  </>
                )}
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      variant="medium"
                      numberOfLines={1}
                      style={{ flex: 1 }}
                    >
                      {match.strHomeTeam}
                    </Text>
                  </View>
                  <Text variant="bold" size="lg">
                    {match.intHomeScore || "-"}
                  </Text>
                </View>
                <Spacer size={theme.spacing.xs} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      flex: 1,
                    }}
                  >
                    <Text
                      variant="medium"
                      numberOfLines={1}
                      style={{ flex: 1 }}
                    >
                      {match.strAwayTeam}
                    </Text>
                  </View>
                  <Text variant="bold" size="lg">
                    {match.intAwayScore || "-"}
                  </Text>
                </View>
                <Spacer size={theme.spacing.xs} />
                <Text size="sm" color={theme.colors.textTertiary}>
                  {match.strLeague} • {match.strTime || "TBD"}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text color={theme.colors.textSecondary}>No matches today</Text>
          )}
        </View>
        <Spacer size={theme.spacing.xl} />

        {/* Upcoming Matches */}
        <View>
          <Heading level="3">Upcoming Matches</Heading>
          <Spacer size={theme.spacing.md} />
          {upcomingMatches?.results && upcomingMatches.results.length > 0 ? (
            upcomingMatches.results.slice(0, 3).map(match => (
              <TouchableOpacity
                key={match.idEvent}
                onPress={() =>
                  (navigation as any).navigate("MatchDetail", {
                    matchId: match.idEvent,
                  })
                }
                style={{
                  backgroundColor: theme.colors.card,
                  padding: theme.spacing.md,
                  borderRadius: 12,
                  marginBottom: theme.spacing.sm,
                  ...theme.shadows.sm,
                }}
              >
                <Text variant="medium">
                  {match.strHomeTeam} vs {match.strAwayTeam}
                </Text>
                <Spacer size={theme.spacing.xs} />
                <Text size="sm" color={theme.colors.textTertiary}>
                  {match.dateEvent} • {match.strTime || "TBD"}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text color={theme.colors.textSecondary}>No upcoming matches</Text>
          )}
        </View>
        <Spacer size={theme.spacing.xl} />

        {/* Recent Results */}
        <View>
          <Heading level="3">Recent Results</Heading>
          <Spacer size={theme.spacing.md} />
          {recentMatches?.events && recentMatches.events.length > 0 ? (
            recentMatches.events.slice(0, 3).map(match => (
              <TouchableOpacity
                key={match.idEvent}
                onPress={() =>
                  (navigation as any).navigate("MatchDetail", {
                    matchId: match.idEvent,
                  })
                }
                style={{
                  backgroundColor: theme.colors.card,
                  padding: theme.spacing.md,
                  borderRadius: 12,
                  marginBottom: theme.spacing.sm,
                  ...theme.shadows.sm,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text variant="medium">{match.strHomeTeam}</Text>
                  <Text variant="bold" size="lg">
                    {match.intHomeScore}
                  </Text>
                </View>
                <Spacer size={theme.spacing.xs} />
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text variant="medium">{match.strAwayTeam}</Text>
                  <Text variant="bold" size="lg">
                    {match.intAwayScore}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text color={theme.colors.textSecondary}>No recent matches</Text>
          )}
        </View>
        <Spacer size={theme.spacing["2xl"]} />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
