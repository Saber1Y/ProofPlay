export type MatchStatus = "upcoming" | "live" | "finished";

export type Match = {
  id: string;
  homeTeam: string;
  awayTeam: string;
  kickoffTime: string;
  status: MatchStatus;
};

export type PlayerPosition = "GK" | "DEF" | "MID" | "FWD";

export type Player = {
  id: number;
  name: string;
  team: string;
  position: PlayerPosition;
  imageUrl?: string;
};

export type PlayerStats = {
  playerId: number;
  goals: number;
  assists: number;
  yellowCards: number;
  redCards: number;
  cleanSheet: boolean;
  minutesPlayed: number;
};

export type RoomStatus = "open" | "locked" | "settled";

export type Room = {
  id: string;
  matchId: string;
  entryFee: string;
  maxParticipants: number;
  deadline: string;
  status: RoomStatus;
};

export const SCORING_RULES = {
  goal: 5,
  assist: 3,
  cleanSheet: 4,
  yellowCard: -1,
  redCard: -3,
  playedSixtyPlus: 1,
  captainMultiplier: 2
} as const;
