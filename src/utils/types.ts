// API Response Types
export interface League {
  idLeague: string;
  strLeague: string;
  strSport: string;
  strLeagueAlternate: string;
  strDivision?: string;
  strCurrentSeason?: string;
  intFormedYear?: string;
  dateFirstEvent?: string;
  strGender?: string;
  strCountry?: string;
  strWebsite?: string;
  strFacebook?: string;
  strTwitter?: string;
  strYoutube?: string;
  strDescriptionEN?: string;
  strBadge?: string;
  strLogo?: string;
  strBanner?: string;
  strComplete?: string;
  strLocked?: string;
}

export interface Team {
  idTeam: string;
  strTeam: string;
  strTeamShort?: string;
  strAlternate?: string;
  intFormedYear?: string;
  strSport?: string;
  strLeague?: string;
  idLeague?: string;
  strDivision?: string;
  strManager?: string;
  strStadium?: string;
  strKeywords?: string;
  strRSS?: string;
  strStadiumThumb?: string;
  strStadiumDescription?: string;
  strStadiumLocation?: string;
  intStadiumCapacity?: string;
  strWebsite?: string;
  strFacebook?: string;
  strTwitter?: string;
  strInstagram?: string;
  strDescriptionEN?: string;
  strGender?: string;
  strCountry?: string;
  strTeamBadge?: string;
  strTeamJersey?: string;
  strTeamLogo?: string;
  strTeamFanart1?: string;
  strTeamFanart2?: string;
  strTeamFanart3?: string;
  strTeamFanart4?: string;
  strTeamBanner?: string;
  strYoutube?: string;
  strLocked?: string;
}

export interface Player {
  idPlayer: string;
  strPlayer: string;
  strTeam?: string;
  strNationality?: string;
  strSport?: string;
  intSoccerXMLTeamID?: string;
  dateBorn?: string;
  strNumber?: string;
  dateSigned?: string;
  strSigning?: string;
  strWage?: string;
  strOutfitter?: string;
  strKit?: string;
  strAgent?: string;
  strBirthLocation?: string;
  strDescriptionEN?: string;
  strGender?: string;
  strSide?: string;
  strPosition?: string;
  strHeight?: string;
  strWeight?: string;
  intLoved?: string;
  strThumb?: string;
  strCutout?: string;
  strRender?: string;
  strBanner?: string;
  strFanart1?: string;
  strFanart2?: string;
  strFanart3?: string;
  strFanart4?: string;
  strCreativeCommons?: string;
  strLocked?: string;
}

export interface Event {
  idEvent: string;
  strEvent?: string;
  strEventAlternate?: string;
  strFilename?: string;
  strSport?: string;
  idLeague?: string;
  strLeague?: string;
  strSeason?: string;
  strDescriptionEN?: string;
  strHomeTeam?: string;
  strAwayTeam?: string;
  intHomeScore?: string | null;
  intAwayScore?: string | null;
  intRound?: string;
  intSpectators?: string;
  strHomeGoalDetails?: string;
  strHomeRedCards?: string;
  strHomeYellowCards?: string;
  strHomeLineupGoalkeeper?: string;
  strHomeLineupDefense?: string;
  strHomeLineupMidfield?: string;
  strHomeLineupForward?: string;
  strHomeLineupSubstitutes?: string;
  strHomeFormation?: string;
  strAwayRedCards?: string;
  strAwayYellowCards?: string;
  strAwayGoalDetails?: string;
  strAwayLineupGoalkeeper?: string;
  strAwayLineupDefense?: string;
  strAwayLineupMidfield?: string;
  strAwayLineupForward?: string;
  strAwayLineupSubstitutes?: string;
  strAwayFormation?: string;
  intHomeShots?: string;
  intAwayShots?: string;
  dateEvent?: string;
  strDate?: string;
  strTime?: string;
  strTimeLocal?: string;
  strTVStation?: string;
  idHomeTeam?: string;
  idAwayTeam?: string;
  strResult?: string;
  strVenue?: string;
  strCountry?: string;
  strCity?: string;
  strPoster?: string;
  strSquare?: string;
  strFanart?: string;
  strThumb?: string;
  strBanner?: string;
  strMap?: string;
  strTweet1?: string;
  strTweet2?: string;
  strTweet3?: string;
  strVideo?: string;
  strStatus?: string;
  strPostponed?: string;
  strLocked?: string;
}

export interface Standing {
  idStanding?: string;
  intRank?: string;
  idTeam?: string;
  strTeam?: string;
  strTeamBadge?: string;
  idLeague?: string;
  strLeague?: string;
  strSeason?: string;
  strForm?: string;
  strDescription?: string;
  intPlayed?: string;
  intWin?: string;
  intLoss?: string;
  intDraw?: string;
  intGoalsFor?: string;
  intGoalsAgainst?: string;
  intGoalDifference?: string;
  intPoints?: string;
  dateUpdated?: string;
}

export interface Lineup {
  idLineup?: string;
  idEvent?: string;
  idTeam?: string;
  strTeam?: string;
  strPlayer?: string;
  idPlayer?: string;
  strPosition?: string;
  strPositionShort?: string;
  intSquadNumber?: string;
  strNationality?: string;
}

export interface Timeline {
  idTimeline?: string;
  idEvent?: string;
  strTimeline?: string;
  strTimelineDetail?: string;
  strHome?: string;
  strEvent?: string;
  idTeam?: string;
  strTeam?: string;
  strPlayer?: string;
  idPlayer?: string;
  intTime?: string;
  strComment?: string;
}

export interface EventStats {
  intHomeShots?: string;
  intAwayShots?: string;
  intHomeShotsOnTarget?: string;
  intAwayShotsOnTarget?: string;
  intHomePossession?: string;
  intAwayPossession?: string;
  intHomeCorners?: string;
  intAwayCorners?: string;
  intHomeFouls?: string;
  intAwayFouls?: string;
  intHomeYellowCards?: string;
  intAwayYellowCards?: string;
  intHomeRedCards?: string;
  intAwayRedCards?: string;
}

// App State Types
export interface User {
  id: string;
  username: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  avatar?: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface FavouriteTeam {
  idTeam: string;
  strTeam: string;
  strTeamBadge?: string;
  strLeague?: string;
}

export interface FavouritePlayer {
  idPlayer: string;
  strPlayer: string;
  strThumb?: string;
  strTeam?: string;
  strPosition?: string;
}

export interface FavouriteMatch {
  idEvent: string;
  strHomeTeam: string;
  strAwayTeam: string;
  dateEvent: string;
  strLeague?: string;
}

export interface FavouritesState {
  teams: FavouriteTeam[];
  players: FavouritePlayer[];
  matches: FavouriteMatch[];
}

export interface SettingsState {
  theme: "light" | "dark" | "system";
  defaultLeague?: string;
  defaultLeagueId?: string;
  defaultSport: string;
  notificationsEnabled: boolean;
  language: string;
}

export interface UIState {
  toast: {
    visible: boolean;
    message: string;
    type: "success" | "error" | "info" | "warning";
  } | null;
  isOnline: boolean;
}

// Navigation Types
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

export type MatchStackParamList = {
  TodayMatches: undefined;
  MatchDetail: { matchId: string };
  TeamDetail: { teamId: string };
  PlayerDetail: { playerId: string };
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
