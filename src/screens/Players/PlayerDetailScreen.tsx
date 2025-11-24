import React from "react";
import { View, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useTheme } from "../../hooks/useTheme";
import { useLookupPlayerQuery } from "../../api/sportsApi";
import { Heading } from "../../components/common/atoms/Heading";
import { Text } from "../../components/common/atoms/Text";
import { Spacer } from "../../components/common/atoms/Spacer";
import { LoadingSpinner } from "../../components/common/atoms/LoadingSpinner";
import { Badge } from "../../components/common/atoms/Badge";
import { BackButton } from "../../components/common/molecules/BackButton";

const PlayerDetailScreen = () => {
  const { theme } = useTheme();
  const route = useRoute();
  const { playerId } = route.params as { playerId: string };

  const { data, isLoading, error } = useLookupPlayerQuery(playerId);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error || !data?.players?.[0]) {
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
          Could not load player details
        </Text>
      </View>
    );
  }

  const player = data.players[0];

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
      {/* Player Banner */}
      {player.strFanart1 && (
        <>
          <Image
            source={{ uri: player.strFanart1 }}
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

      {/* Player Photo and Name */}
      <View style={{ alignItems: "center" }}>
        {player.strThumb && (
          <>
            <Image
              source={{ uri: player.strThumb }}
              style={{
                width: 150,
                height: 150,
                borderRadius: 75,
                borderWidth: 4,
                borderColor: theme.colors.primary,
              }}
              resizeMode="cover"
            />
            <Spacer size={theme.spacing.lg} />
          </>
        )}
        <Heading level="1">{player.strPlayer}</Heading>
        <Spacer size={theme.spacing.sm} />
        {player.strPosition && (
          <>
            <Text size="lg" variant="medium" color={theme.colors.primary}>
              {player.strPosition}
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
          {player.strTeam && <Badge label={player.strTeam} variant="primary" />}
          {player.strNationality && (
            <Badge label={player.strNationality} variant="info" />
          )}
          {player.strNumber && (
            <Badge label={`#${player.strNumber}`} variant="neutral" />
          )}
        </View>
      </View>

      <Spacer size={theme.spacing.xl} />

      {/* Player Info */}
      <View
        style={{
          backgroundColor: theme.colors.card,
          padding: theme.spacing.md,
          borderRadius: 12,
          ...theme.shadows.sm,
        }}
      >
        <Heading level="3">Player Information</Heading>
        <Spacer size={theme.spacing.md} />

        {player.dateBorn && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Date of Birth</Text>
              <Text variant="medium">{player.dateBorn}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {player.strBirthLocation && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Birth Place</Text>
              <Text variant="medium" style={{ flex: 1, textAlign: "right" }}>
                {player.strBirthLocation}
              </Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {player.strHeight && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Height</Text>
              <Text variant="medium">{player.strHeight}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {player.strWeight && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Weight</Text>
              <Text variant="medium">{player.strWeight}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {player.strSide && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Preferred Foot</Text>
              <Text variant="medium">{player.strSide}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {player.dateSigned && (
          <>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text color={theme.colors.textSecondary}>Signed</Text>
              <Text variant="medium">{player.dateSigned}</Text>
            </View>
            <Spacer size={theme.spacing.sm} />
          </>
        )}

        {player.strWage && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text color={theme.colors.textSecondary}>Wage</Text>
            <Text variant="medium">{player.strWage}</Text>
          </View>
        )}
      </View>

      {/* Description */}
      {player.strDescriptionEN && (
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
            <Heading level="3">Biography</Heading>
            <Spacer size={theme.spacing.md} />
            <Text>{player.strDescriptionEN}</Text>
          </View>
        </>
      )}

      {/* Player Cutout */}
      {player.strCutout && (
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
            <Image
              source={{ uri: player.strCutout }}
              style={{
                width: 250,
                height: 300,
              }}
              resizeMode="contain"
            />
          </View>
        </>
      )}
    </ScrollView>
  );
};

export default PlayerDetailScreen;
