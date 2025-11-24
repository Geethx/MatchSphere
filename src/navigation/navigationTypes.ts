export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  Auth: undefined;
  Main: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  HomeTab: undefined;
  LeaguesTab: undefined;
  TeamsTab: undefined;
  PlayersTab: undefined;
  FavouritesTab: undefined;
  ProfileTab: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  MatchDetail: { matchId: string };
  TeamDetail: { teamId: string };
  PlayerDetail: { playerId: string };
};

export type LeagueStackParamList = {
  LeagueList: undefined;
  LeagueDetail: { leagueId: string; leagueName: string };
  TeamDetail: { teamId: string };
  MatchDetail: { matchId: string };
};

export type TeamStackParamList = {
  TeamList: undefined;
  TeamDetail: { teamId: string };
  PlayerDetail: { playerId: string };
  MatchDetail: { matchId: string };
};

export type PlayerStackParamList = {
  PlayerSearch: undefined;
  PlayerDetail: { playerId: string };
  TeamDetail: { teamId: string };
};

export type FavouritesStackParamList = {
  Favourites: undefined;
  TeamDetail: { teamId: string };
  PlayerDetail: { playerId: string };
  MatchDetail: { matchId: string };
};

export type ProfileStackParamList = {
  Profile: undefined;
  Settings: undefined;
};
