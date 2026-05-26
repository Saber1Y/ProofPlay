import type { Match, Player, Room } from "@proofplay/shared";

export type DemoLineup = {
  teamName: string;
  captainId: number;
  playerIds: number[];
};

export type DemoLeaderboardEntry = {
  teamName: string;
  points: number;
  winner: boolean;
};

export type DemoRoomReceipt = {
  roomId: string;
  text: string;
  payoutStatus: "pending" | "paid";
  winnerWallet: string;
  payoutTx: string;
};

export const demoMatches: Match[] = [
  {
    id: "ars-che-2026-05-24",
    homeTeam: "Arsenal",
    awayTeam: "Chelsea",
    kickoffTime: "2026-05-24T16:30:00Z",
    status: "finished"
  },
  {
    id: "mci-liv-2026-05-27",
    homeTeam: "Man City",
    awayTeam: "Liverpool",
    kickoffTime: "2026-05-27T19:00:00Z",
    status: "upcoming"
  }
];

export const demoRooms: Room[] = [
  {
    id: "room-001",
    matchId: "ars-che-2026-05-24",
    entryFee: "5",
    maxParticipants: 10,
    deadline: "2026-05-24T16:00:00Z",
    status: "settled"
  },
  {
    id: "room-002",
    matchId: "mci-liv-2026-05-27",
    entryFee: "3",
    maxParticipants: 8,
    deadline: "2026-05-27T18:30:00Z",
    status: "open"
  }
];

export const demoPlayersByMatch: Record<string, Player[]> = {
  "ars-che-2026-05-24": [
    { id: 1, name: "David Raya", team: "Arsenal", position: "GK" },
    { id: 2, name: "William Saliba", team: "Arsenal", position: "DEF" },
    { id: 3, name: "Martin Odegaard", team: "Arsenal", position: "MID" },
    { id: 4, name: "Cole Palmer", team: "Chelsea", position: "MID" },
    { id: 5, name: "Nicolas Jackson", team: "Chelsea", position: "FWD" },
    { id: 6, name: "Declan Rice", team: "Arsenal", position: "MID" }
  ],
  "mci-liv-2026-05-27": [
    { id: 11, name: "Ederson", team: "Man City", position: "GK" },
    { id: 12, name: "Ruben Dias", team: "Man City", position: "DEF" },
    { id: 13, name: "Kevin De Bruyne", team: "Man City", position: "MID" },
    { id: 14, name: "Mohamed Salah", team: "Liverpool", position: "MID" },
    { id: 15, name: "Erling Haaland", team: "Man City", position: "FWD" },
    { id: 16, name: "Virgil van Dijk", team: "Liverpool", position: "DEF" }
  ]
};

export const demoLineupsByRoom: Record<string, DemoLineup[]> = {
  "room-001": [
    { teamName: "Saber FC", captainId: 3, playerIds: [1, 2, 3, 4, 5] },
    { teamName: "Penalty Box", captainId: 4, playerIds: [1, 2, 4, 5, 6] },
    { teamName: "Offside XI", captainId: 5, playerIds: [1, 2, 3, 5, 6] }
  ],
  "room-002": [{ teamName: "Demo Eleven", captainId: 15, playerIds: [11, 12, 13, 14, 15] }]
};

export const demoLeaderboardByRoom: Record<string, DemoLeaderboardEntry[]> = {
  "room-001": [
    { teamName: "Saber FC", points: 42, winner: true },
    { teamName: "Penalty Box", points: 35, winner: false },
    { teamName: "Offside XI", points: 27, winner: false }
  ],
  "room-002": [
    { teamName: "Demo Eleven", points: 0, winner: false },
    { teamName: "Awaiting Settlement", points: 0, winner: false }
  ]
};

export const demoReceiptsByRoom: Record<string, DemoRoomReceipt> = {
  "room-001": {
    roomId: "room-001",
    text:
      "Saber FC won with 42 points. The captain delivered the highest individual contribution and two clean-sheet defenders created the winning margin.",
    payoutStatus: "paid",
    winnerWallet: "0x9b2...43D1",
    payoutTx: "0xf12...9ac4"
  },
  "room-002": {
    roomId: "room-002",
    text: "Match settlement is pending. Stats request is queued for agent settlement after kickoff.",
    payoutStatus: "pending",
    winnerWallet: "--",
    payoutTx: "--"
  }
};

export function getMatchLabel(matchId: string) {
  const match = demoMatches.find((item) => item.id === matchId);

  if (!match) {
    return matchId;
  }

  return `${match.homeTeam} vs ${match.awayTeam}`;
}

export function getRoomById(roomId: string) {
  return demoRooms.find((room) => room.id === roomId);
}

export function getPlayersForMatch(matchId: string) {
  return demoPlayersByMatch[matchId] ?? [];
}

export function getLineupsForRoom(roomId: string) {
  return demoLineupsByRoom[roomId] ?? [];
}

export function getLeaderboardForRoom(roomId: string) {
  return demoLeaderboardByRoom[roomId] ?? [];
}

export function getReceiptForRoom(roomId: string) {
  return demoReceiptsByRoom[roomId];
}
