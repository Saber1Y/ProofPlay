import { WalletButton } from "@/components/WalletButton";
import { demoMatches } from "@/lib/demo-data";

export default function CreateRoomPage() {
  return (
    <section>
      <h1 className="section-title">Create Fantasy Match Room</h1>
      <p className="meta">
        Basic UI is ready. Next integration step is wiring this form to the `createRoom(...)` smart
        contract write.
      </p>

      <article className="card" style={{ marginTop: "1rem" }}>
        <div className="form-grid">
          <div className="field">
            <label>Match</label>
            <select defaultValue={demoMatches[0]?.id}>
              {demoMatches.map((match) => (
                <option key={match.id} value={match.id}>
                  {match.homeTeam} vs {match.awayTeam}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Entry Fee (STT)</label>
            <input type="number" defaultValue="5" min="0" />
          </div>

          <div className="field">
            <label>Max Participants</label>
            <input type="number" defaultValue="10" min="2" />
          </div>

          <div className="field">
            <label>Lineup Deadline (UTC)</label>
            <input type="datetime-local" defaultValue="2026-05-27T18:30" />
          </div>
        </div>

        <div className="btn-row" style={{ marginTop: "1rem" }}>
          <button className="btn primary" type="button">
            Create Room
          </button>
          <WalletButton connected={false} />
        </div>
      </article>
    </section>
  );
}
