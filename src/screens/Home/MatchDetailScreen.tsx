import React from "react";
import { View, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useLookupEventQuery } from "../../api/sportsApi";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";
import { Badge } from "../../components/common/atoms/Badge";
import { Divider } from "../../components/common/atoms/Divider";
import { BackButton } from "../../components/common/molecules/BackButton";

const MatchDetailScreen = () => {
  const { theme } = useTheme();
  const route = useRoute();
  const { matchId } = route.params as { matchId: string };

  const { data, isLoading, error } = useLookupEventQuery(matchId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data?.events?.[0]) {
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
          Could not load match details
        </Text>
      </View>
    );
  }

  const match = data.events[0];

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
      {/* Match Banner */}
      {match.strThumb && (
        <>
          <Image
            source={{ uri: match.strThumb }}
            style={{
              width: "100%",
              height: 200,
              borderRadius: 12,
            }}
            resizeMode="cover"
          />
          <Spacer size={theme.spacing.lg} />
        </>
      )}

      {/* Match Title */}
      <Heading level="1">{match.strEvent || "Match Details"}</Heading>
      <Spacer size={theme.spacing.sm} />
      <Text size="lg" color={theme.colors.textSecondary}>
        {match.strLeague} • {match.strSeason}
      </Text>
      <Spacer size={theme.spacing.xl} />

      {/* Score Card */}
      <View
        style={{
          backgroundColor: theme.colors.card,
          padding: theme.spacing.lg,
          borderRadius: 12,
          ...theme.shadows.md,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text variant="bold" size="xl">
              {match.strHomeTeam}
            </Text>
            <Text size="sm" color={theme.colors.textTertiary}>
              Home
            </Text>
          </View>
          <Heading level="1">{match.intHomeScore || "-"}</Heading>
        </View>

        <Spacer size={theme.spacing.md} />
        <Divider />
        <Spacer size={theme.spacing.md} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1 }}>
            <Text variant="bold" size="xl">
              {match.strAwayTeam}
            </Text>
            <Text size="sm" color={theme.colors.textTertiary}>
              Away
            </Text>
          </View>
          <Heading level="1">{match.intAwayScore || "-"}</Heading>
        </View>
      </View>

      <Spacer size={theme.spacing.xl} />

      {/* Match Info */}
      <View
        style={{
          backgroundColor: theme.colors.card,
          padding: theme.spacing.md,
          borderRadius: 12,
          ...theme.shadows.sm,
        }}
      >
        <Heading level="3">Match Information</Heading>
        <Spacer size={theme.spacing.md} />

        {match.dateEvent && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Date</Text>
              <Text variant="medium">{match.dateEvent}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {match.strTime && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Time</Text>
              <Text variant="medium">{match.strTime}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {match.strVenue && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Venue</Text>
              <Text variant="medium" style={{ flex: 1, textAlign: "right" }}>
                {match.strVenue}
              </Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {match.intRound && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Round</Text>
              <Badge label={`Round ${match.intRound}`} variant="info" />
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {match.intSpectators && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text color={theme.colors.textSecondary}>Spectators</Text>
            <Text variant="medium">{match.intSpectators}</Text>
          </View>
        )}
      </View>

      {/* Match Statistics */}
      {(match.intHomeShots || match.intAwayShots) && (
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
            <Heading level="3">Match Statistics</Heading>
            <Spacer size={theme.spacing.md} />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text variant="bold">{match.intHomeShots || "0"}</Text>
              <Text color={theme.colors.textSecondary}>Shots</Text>
              <Text variant="bold">{match.intAwayShots || "0"}</Text>
            </View>
          </View>
        </>
      )}

      {/* Description */}
      {match.strDescriptionEN && (
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
            <Text>{match.strDescriptionEN}</Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default MatchDetailScreen;
