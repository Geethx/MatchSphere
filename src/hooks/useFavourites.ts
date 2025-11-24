import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  toggleFavouriteTeam,
  toggleFavouritePlayer,
  toggleFavouriteMatch,
} from "../store/features/favouritesSlice";
import { FavouriteTeam, FavouritePlayer, FavouriteMatch } from "../utils/types";

export const useFavourites = () => {
  const dispatch = useAppDispatch();
  const favourites = useAppSelector(state => state.favourites);

  const isFavouriteTeam = (teamId: string): boolean => {
    return favourites.teams.some(team => team.idTeam === teamId);
  };

  const isFavouritePlayer = (playerId: string): boolean => {
    return favourites.players.some(player => player.idPlayer === playerId);
  };

  const isFavouriteMatch = (matchId: string): boolean => {
    return favourites.matches.some(match => match.idEvent === matchId);
  };

  const toggleTeam = (team: FavouriteTeam) => {
    dispatch(toggleFavouriteTeam(team));
  };

  const togglePlayer = (player: FavouritePlayer) => {
    dispatch(toggleFavouritePlayer(player));
  };

  const toggleMatch = (match: FavouriteMatch) => {
    dispatch(toggleFavouriteMatch(match));
  };

  return {
    favourites,
    isFavouriteTeam,
    isFavouritePlayer,
    isFavouriteMatch,
    toggleTeam,
    togglePlayer,
    toggleMatch,
  };
};
