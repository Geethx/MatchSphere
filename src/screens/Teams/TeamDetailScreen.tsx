import React from "react";
import { View, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useLookupTeamQuery } from "../../api/sportsApi";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";
import { Badge } from "../../components/common/atoms/Badge";
import { BackButton } from "../../components/common/molecules/BackButton";

const TeamDetailScreen = () => {
  const { theme } = useTheme();
  const route = useRoute();
  const { teamId } = route.params as { teamId: string };

  const { data, isLoading, error } = useLookupTeamQuery(teamId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data?.teams?.[0]) {
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
          Could not load team details
        </Text>
      </View>
    );
  }

  const team = data.teams[0];

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
      {/* Team Banner */}
      {team.strTeamBanner && (
        <>
          <Image
            source={{ uri: team.strTeamBanner }}
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

      {/* Team Badge and Name */}
      <View style={{ alignItems: "center" }}>
        {team.strTeamBadge && (
          <>
            <Image
              source={{ uri: team.strTeamBadge }}
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
        <Heading level="1">{team.strTeam}</Heading>
        <Spacer size={theme.spacing.sm} />
        {team.strAlternate && (
          <>
            <Text size="lg" color={theme.colors.textSecondary}>
              {team.strAlternate}
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
          {team.strSport && <Badge label={team.strSport} variant="primary" />}
          {team.strLeague && <Badge label={team.strLeague} variant="info" />}
          {team.strCountry && (
            <Badge label={team.strCountry} variant="neutral" />
          )}
        </View>
      </View>

      <Spacer size={theme.spacing.xl} />

      {/* Team Info */}
      <View
        style={{
          backgroundColor: theme.colors.card,
          padding: theme.spacing.md,
          borderRadius: 12,
          ...theme.shadows.sm,
        }}
      >
        <Heading level="3">Team Information</Heading>
        <Spacer size={theme.spacing.md} />

        {team.intFormedYear && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Founded</Text>
              <Text variant="medium">{team.intFormedYear}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {team.strStadium && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Stadium</Text>
              <Text variant="medium" style={{ flex: 1, textAlign: "right" }}>
                {team.strStadium}
              </Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {team.intStadiumCapacity && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Capacity</Text>
              <Text variant="medium">{team.intStadiumCapacity}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {team.strStadiumLocation && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Location</Text>
              <Text variant="medium" style={{ flex: 1, textAlign: "right" }}>
                {team.strStadiumLocation}
              </Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {team.strManager && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text color={theme.colors.textSecondary}>Manager</Text>
            <Text variant="medium">{team.strManager}</Text>
          </View>
        )}
      </View>

      {/* Stadium Image */}
      {team.strStadiumThumb && (
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
            <Heading level="3">Stadium</Heading>
            <Spacer size={theme.spacing.md} />
            <Image
              source={{ uri: team.strStadiumThumb }}
              style={{
                width: "100%",
                height: 180,
                borderRadius: 8,
              }}
              resizeMode="cover"
            />
            {team.strStadiumDescription && (
              <>
                <Spacer size={theme.spacing.md} />
                <Text size="sm" color={theme.colors.textSecondary}>
                  {team.strStadiumDescription}
                </Text>
              </>
            )}
          </View>
        </>
      )}

      {/* Description */}
      {team.strDescriptionEN && (
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
            <Text>{team.strDescriptionEN}</Text>
          </View>
        </>
      )}

      {/* Jersey */}
      {team.strTeamJersey && (
        <>
          <Spacer size={theme.spacing.xl} />
          <View
            style={{
              backgroundColor: theme.colors.card,
              padding: theme.spacing.md,
              borderRadius: 12,
              ...theme.shadows.sm,
              alignItems: "center",
            }}
          >
            <Heading level="3">Team Jersey</Heading>
            <Spacer size={theme.spacing.md} />
            <Image
              source={{ uri: team.strTeamJersey }}
              style={{
                width: 200,
                height: 200,
              }}
              resizeMode="contain"
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default TeamDetailScreen;
