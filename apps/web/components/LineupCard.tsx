import type { Player } from "@proofplay/shared";
import type { DemoLineup } from "@/lib/demo-data";

type LineupCardProps = {
  lineup: DemoLineup;
  players: Player[];
};

function resolvePlayerName(playerId: number, players: Player[]) {
  const player = players.find((item) => item.id === playerId);
  return player ? `${player.name} (${player.position})` : `Player ${playerId}`;
}

export function LineupCard({ lineup, players }: LineupCardProps) {
  return (
    <article className="card">
      <h2 className="section-title">Saved Lineup</h2>
      <p className="meta">Team: {lineup.teamName}</p>

      <div className="lineup-list">
        {lineup.playerIds.map((playerId) => {
          const isCaptain = lineup.captainId === playerId;

          return (
            <div className="lineup-row" key={playerId}>
              <span>{resolvePlayerName(playerId, players)}</span>
              {isCaptain ? <span className="pill settled">Captain</span> : null}
            </div>
          );
        })}
      </div>
    </article>
  );
}
