import React, { useState } from "react";
import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useSearchPlayersQuery } from "../../api/sportsApi";
import { useDebouncedValue } from "../../hooks/useDebouncedValue";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { SearchBar } from "../../components/common/molecules/SearchBar";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";
import { Badge } from "../../components/common/atoms/Badge";

const PlayersScreen = () => {
  const navigation = useNavigation();
  const { theme } = useTheme();
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedQuery = useDebouncedValue(searchQuery, 500);

  const { data: searchData, isLoading } = useSearchPlayersQuery(
    debouncedQuery,
    {
      skip: !debouncedQuery || debouncedQuery.length < 2,
    }
  );

  const players = searchData?.player || [];
  const searchActive = debouncedQuery.length > 0;

  const renderPlayerCard = (player: any) => (
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
  );

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
          Players
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
        <SearchBar
          value={searchQuery}
          onChangeText={setSearchQuery}
          placeholder="Search for players..."
        />
        <Spacer size={theme.spacing.lg} />

        {/* Search Results Title */}
        {searchActive && players.length > 0 && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: theme.spacing.md,
              }}
            >
              <Heading level="3">Search Results</Heading>
              <Badge label={`${players.length}`} variant="primary" />
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {isLoading ? (
          <LoadingSpinner />
        ) : players.length > 0 ? (
          <View>{players.map(renderPlayerCard)}</View>
        ) : searchActive ? (
          <Text color={theme.colors.textSecondary}>No players found</Text>
        ) : (
          <View>
            <Text color={theme.colors.textSecondary}>
              Search to discover players from your favorite teams
            </Text>
            <Spacer size={theme.spacing.lg} />
            <View
              style={{
                backgroundColor: theme.colors.surfaceElevated,
                padding: theme.spacing.md,
                borderRadius: 12,
                borderLeftWidth: 4,
                borderLeftColor: theme.colors.primary,
              }}
            >
              <Text variant="medium" size="base">
                💡 Quick Tips
              </Text>
              <Spacer size={theme.spacing.sm} />
              <Text size="sm" color={theme.colors.textSecondary}>
                • Enter 2+ characters to search
              </Text>
              <Spacer size={theme.spacing.xs} />
              <Text size="sm" color={theme.colors.textSecondary}>
                • Find players by name, team, or position
              </Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default PlayersScreen;
