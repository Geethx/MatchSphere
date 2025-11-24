import React from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useFavourites } from "../../hooks/useFavourites";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { Badge } from "../../components/common/atoms/Badge";

const FavouritesScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const { favourites } = useFavourites();

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
          Favourites ❤️
        </Heading>
      </View>

      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: theme.spacing.screenPadding,
          paddingTop: theme.spacing.lg,
          paddingBottom: theme.spacing.lg,
        }}
      >
        {/* How to Favourite */}
        <View
          style={{
            backgroundColor: theme.colors.surfaceElevated,
            padding: theme.spacing.md,
            borderRadius: 12,
            borderLeftWidth: 4,
            borderLeftColor: theme.colors.primary,
          }}
        >
          <Text variant="medium" size="lg">
            💡 How to Favourite
          </Text>
          <Spacer size={theme.spacing.sm} />
          <Text color={theme.colors.textSecondary}>
            • Tap the heart icon ❤️ on any team, player, or match detail screen
            to save them here.
          </Text>
          <Spacer size={theme.spacing.xs} />
          <Text color={theme.colors.textSecondary}>
            • Access your favourites anytime for quick updates.
          </Text>
          <Spacer size={theme.spacing.xs} />
          <Text color={theme.colors.textSecondary}>
            • Tap again to remove from favourites.
          </Text>
        </View>
        <Spacer size={theme.spacing.lg} />

        {/* Favourite Teams */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Heading level="3">Teams</Heading>
            <Badge label={`${favourites.teams.length}`} variant="primary" />
          </View>
          <Spacer size={theme.spacing.md} />
          {favourites.teams.length > 0 ? (
            favourites.teams.map(team => (
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
                  <Spacer size={theme.spacing.xs} />
                  <Text size="sm" color={theme.colors.textTertiary}>
                    {team.strLeague}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text color={theme.colors.textSecondary}>
              No favourite teams yet
            </Text>
          )}
        </View>
        <Spacer size={theme.spacing.xl} />

        {/* Favourite Players */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Heading level="3">Players</Heading>
            <Badge label={`${favourites.players.length}`} variant="primary" />
          </View>
          <Spacer size={theme.spacing.md} />
          {favourites.players.length > 0 ? (
            favourites.players.map(player => (
              <TouchableOpacity
                key={player.idPlayer}
                onPress={() =>
                  (navigation as any).navigate("PlayerDetail", {
                    playerId: player.idPlayer,
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
                {player.strThumb && (
                  <Image
                    source={{ uri: player.strThumb }}
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      marginRight: theme.spacing.md,
                    }}
                    resizeMode="cover"
                  />
                )}
                <View style={{ flex: 1 }}>
                  <Text variant="medium" size="lg">
                    {player.strPlayer}
                  </Text>
                  <Spacer size={theme.spacing.xs} />
                  <Text size="sm" color={theme.colors.textTertiary}>
                    {player.strTeam} • {player.strPosition}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text color={theme.colors.textSecondary}>
              No favourite players yet
            </Text>
          )}
        </View>
        <Spacer size={theme.spacing.xl} />

        {/* Favourite Matches */}
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Heading level="3">Matches</Heading>
            <Badge label={`${favourites.matches.length}`} variant="primary" />
          </View>
          <Spacer size={theme.spacing.md} />
          {favourites.matches.length > 0 ? (
            favourites.matches.map(match => (
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
                  {match.dateEvent} • {match.strLeague}
                </Text>
              </TouchableOpacity>
            ))
          ) : (
            <Text color={theme.colors.textSecondary}>
              No favourite matches yet
            </Text>
          )}
        </View>
        <Spacer size={theme.spacing["2xl"]} />
      </ScrollView>
    </View>
  );
};

export default FavouritesScreen;
