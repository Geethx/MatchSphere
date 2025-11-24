import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SPORTS_API_BASE_URL } from "../config/env";
import {
  League,
  Team,
  Player,
  Event,
  Standing,
  Lineup,
  Timeline,
  EventStats,
} from "../utils/types";

export const sportsApi = createApi({
  reducerPath: "sportsApi",
  baseQuery: fetchBaseQuery({ baseUrl: SPORTS_API_BASE_URL }),
  tagTypes: ["League", "Team", "Player", "Event", "Standing"],
  endpoints: builder => ({
    // Leagues
    getAllLeagues: builder.query<{ leagues: League[] }, void>({
      query: () => "/all_leagues.php",
      providesTags: ["League"],
    }),

    getLeagueSeasons: builder.query<{ seasons: string[] }, string>({
      query: leagueId => `/search_all_seasons.php?id=${leagueId}`,
    }),

    lookupLeague: builder.query<{ leagues: League[] }, string>({
      query: leagueId => `/lookupleague.php?id=${leagueId}`,
    }),

    // Teams
    getTeamsByLeague: builder.query<{ teams: Team[] | null }, string>({
      query: leagueName =>
        `/search_all_teams.php?l=${encodeURIComponent(leagueName)}`,
      providesTags: ["Team"],
    }),

    lookupTeam: builder.query<{ teams: Team[] | null }, string>({
      query: teamId => `/lookupteam.php?id=${teamId}`,
      providesTags: (result, error, teamId) => [{ type: "Team", id: teamId }],
    }),

    searchTeams: builder.query<{ teams: Team[] | null }, string>({
      query: teamName => `/searchteams.php?t=${encodeURIComponent(teamName)}`,
    }),

    // Players
    getPlayersByTeam: builder.query<{ player: Player[] | null }, string>({
      query: teamId => `/lookup_all_players.php?id=${teamId}`,
      providesTags: ["Player"],
    }),

    searchPlayers: builder.query<{ player: Player[] | null }, string>({
      query: playerName =>
        `/searchplayers.php?p=${encodeURIComponent(playerName)}`,
    }),

    lookupPlayer: builder.query<{ players: Player[] | null }, string>({
      query: playerId => `/lookupplayer.php?id=${playerId}`,
      providesTags: (result, error, playerId) => [
        { type: "Player", id: playerId },
      ],
    }),

    // Events/Matches
    getEventsToday: builder.query<
      { events: Event[] | null },
      { date: string; sport: string }
    >({
      query: ({ date, sport }) =>
        `/eventsday.php?d=${date}&s=${encodeURIComponent(sport)}`,
      providesTags: ["Event"],
    }),

    getLeaguePreviousEvents: builder.query<{ events: Event[] | null }, string>({
      query: leagueId => `/eventspastleague.php?id=${leagueId}`,
      providesTags: ["Event"],
    }),

    getLeagueNextEvents: builder.query<{ results: Event[] | null }, string>({
      query: leagueId => `/eventsnextleague.php?id=${leagueId}`,
      providesTags: ["Event"],
    }),

    getTeamNextEvents: builder.query<{ events: Event[] | null }, string>({
      query: teamId => `/eventsnext.php?id=${teamId}`,
    }),

    getTeamPreviousEvents: builder.query<{ results: Event[] | null }, string>({
      query: teamId => `/eventslast.php?id=${teamId}`,
    }),

    lookupEvent: builder.query<{ events: Event[] | null }, string>({
      query: eventId => `/lookupevent.php?id=${eventId}`,
      providesTags: (result, error, eventId) => [
        { type: "Event", id: eventId },
      ],
    }),

    getEventLineup: builder.query<{ lineup: Lineup[] | null }, string>({
      query: eventId => `/lookuplineup.php?id=${eventId}`,
    }),

    getEventTimeline: builder.query<{ timeline: Timeline[] | null }, string>({
      query: eventId => `/lookuptimeline.php?id=${eventId}`,
    }),

    getEventStats: builder.query<{ events: EventStats[] | null }, string>({
      query: eventId => `/lookupeventstats.php?id=${eventId}`,
    }),

    // Standings/Table
    getLeagueTable: builder.query<
      { table: Standing[] | null },
      { leagueId: string; season: string }
    >({
      query: ({ leagueId, season }) =>
        `/lookuptable.php?l=${leagueId}&s=${season}`,
      providesTags: ["Standing"],
    }),

    // Highlights
    getEventHighlights: builder.query<{ tvshows: any[] | null }, string>({
      query: date => `/eventshighlights.php?d=${date}`,
    }),
  }),
});

export const {
  useGetAllLeaguesQuery,
  useGetLeagueSeasonsQuery,
  useLookupLeagueQuery,
  useGetTeamsByLeagueQuery,
  useLookupTeamQuery,
  useSearchTeamsQuery,
  useGetPlayersByTeamQuery,
  useSearchPlayersQuery,
  useLookupPlayerQuery,
  useGetEventsTodayQuery,
  useGetLeaguePreviousEventsQuery,
  useGetLeagueNextEventsQuery,
  useGetTeamNextEventsQuery,
  useGetTeamPreviousEventsQuery,
  useLookupEventQuery,
  useGetEventLineupQuery,
  useGetEventTimelineQuery,
  useGetEventStatsQuery,
  useGetLeagueTableQuery,
  useGetEventHighlightsQuery,
} = sportsApi;
