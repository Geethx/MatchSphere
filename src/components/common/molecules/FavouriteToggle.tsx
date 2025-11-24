import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useTheme } from "../../../hooks/useTheme";
import { Icon } from "../atoms/Icon";
import { useFavourites } from "../../../hooks/useFavourites";

interface FavouriteToggleProps {
  type: "team" | "player" | "match";
  id: string;
  data: any;
}

export const FavouriteToggle: React.FC<FavouriteToggleProps> = ({
  type,
  id,
  data,
}) => {
  const { theme } = useTheme();
  const {
    isFavouriteTeam,
    isFavouritePlayer,
    isFavouriteMatch,
    toggleTeam,
    togglePlayer,
    toggleMatch,
  } = useFavourites();

  const isFavourite =
    type === "team"
      ? isFavouriteTeam(id)
      : type === "player"
      ? isFavouritePlayer(id)
      : isFavouriteMatch(id);

  const handleToggle = () => {
    if (type === "team") {
      toggleTeam(data);
    } else if (type === "player") {
      togglePlayer(data);
    } else {
      toggleMatch(data);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleToggle}
      style={{
        padding: 8,
        borderRadius: 20,
        backgroundColor: theme.colors.surfaceElevated,
      }}
    >
      <Icon
        name={isFavourite ? "heart" : "heart"}
        size={24}
        color={isFavourite ? theme.colors.accent : theme.colors.textTertiary}
      />
    </TouchableOpacity>
  );
};
