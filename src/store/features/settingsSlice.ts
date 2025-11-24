import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingsState } from "../../utils/types";
import { DEFAULT_SPORT } from "../../utils/constants";

const initialState: SettingsState = {
  theme: "system",
  defaultSport: DEFAULT_SPORT,
  notificationsEnabled: true,
  language: "en",
};

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<"light" | "dark" | "system">) => {
      state.theme = action.payload;
    },
    setDefaultLeague: (
      state,
      action: PayloadAction<{ leagueName: string; leagueId: string }>
    ) => {
      state.defaultLeague = action.payload.leagueName;
      state.defaultLeagueId = action.payload.leagueId;
    },
    setDefaultSport: (state, action: PayloadAction<string>) => {
      state.defaultSport = action.payload;
    },
    setNotificationsEnabled: (state, action: PayloadAction<boolean>) => {
      state.notificationsEnabled = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    resetSettings: () => initialState,
  },
});

export const {
  setTheme,
  setDefaultLeague,
  setDefaultSport,
  setNotificationsEnabled,
  setLanguage,
  resetSettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
