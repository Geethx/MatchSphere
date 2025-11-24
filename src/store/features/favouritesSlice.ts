import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  FavouritesState,
  FavouriteTeam,
  FavouritePlayer,
  FavouriteMatch,
} from "../../utils/types";

const initialState: FavouritesState = {
  teams: [],
  players: [],
  matches: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    toggleFavouriteTeam: (state, action: PayloadAction<FavouriteTeam>) => {
      const index = state.teams.findIndex(
        team => team.idTeam === action.payload.idTeam
      );
      if (index !== -1) {
        state.teams.splice(index, 1);
      } else {
        state.teams.push(action.payload);
      }
    },
    toggleFavouritePlayer: (state, action: PayloadAction<FavouritePlayer>) => {
      const index = state.players.findIndex(
        player => player.idPlayer === action.payload.idPlayer
      );
      if (index !== -1) {
        state.players.splice(index, 1);
      } else {
        state.players.push(action.payload);
      }
    },
    toggleFavouriteMatch: (state, action: PayloadAction<FavouriteMatch>) => {
      const index = state.matches.findIndex(
        match => match.idEvent === action.payload.idEvent
      );
      if (index !== -1) {
        state.matches.splice(index, 1);
      } else {
        state.matches.push(action.payload);
      }
    },
    clearAllFavourites: state => {
      state.teams = [];
      state.players = [];
      state.matches = [];
    },
    setFavourites: (state, action: PayloadAction<FavouritesState>) => {
      return action.payload;
    },
  },
});

export const {
  toggleFavouriteTeam,
  toggleFavouritePlayer,
  toggleFavouriteMatch,
  clearAllFavourites,
  setFavourites,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;
