export const SPORTS_API_BASE_URL =
  "https://www.thesportsdb.com/api/v1/json/123";
export const AUTH_API_BASE_URL = "https://dummyjson.com";

export const DEFAULT_LEAGUE = "English Premier League";
export const DEFAULT_LEAGUE_ID = "4328";
export const DEFAULT_SPORT = "Soccer";

export const MATCH_STATUS = {
  LIVE: "LIVE",
  FINISHED: "FT",
  UPCOMING: "NS",
  POSTPONED: "PST",
  CANCELLED: "CANC",
} as const;

export const POSITIONS = {
  GOALKEEPER: "Goalkeeper",
  DEFENDER: "Defender",
  MIDFIELDER: "Midfielder",
  FORWARD: "Forward",
} as const;

export const SPORTS = [
  "Soccer",
  "Basketball",
  "American Football",
  "Baseball",
  "Ice Hockey",
  "Tennis",
  "Cricket",
  "Rugby",
  "Golf",
  "Boxing",
] as const;

export const REFRESH_INTERVALS = {
  LIVE_MATCH: 30000, // 30 seconds
  MATCHES_LIST: 60000, // 1 minute
  STANDINGS: 300000, // 5 minutes
} as const;

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  INITIAL_PAGE: 1,
} as const;
