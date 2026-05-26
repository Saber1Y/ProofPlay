import type { DemoLeaderboardEntry } from "@/lib/demo-data";

type LeaderboardProps = {
  entries: DemoLeaderboardEntry[];
};

export function Leaderboard({ entries }: LeaderboardProps) {
  return (
    <article className="card">
      <h2 className="section-title">Leaderboard</h2>
      <div className="leaderboard-list">
        {entries.map((entry, index) => (
          <div className="leaderboard-row" key={entry.teamName}>
            <div>
              <strong>#{index + 1}</strong> {entry.teamName}
            </div>
            <div className="leaderboard-points">{entry.points} pts</div>
            {entry.winner ? <span className="pill settled">Winner</span> : null}
          </div>
        ))}
      </div>
    </article>
  );
}
