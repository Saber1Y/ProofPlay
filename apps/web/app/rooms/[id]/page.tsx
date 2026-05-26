import Link from "next/link";
import { LineupCard } from "@/components/LineupCard";
import { PlayerPicker } from "@/components/PlayerPicker";
import {
  getLineupsForRoom,
  getMatchLabel,
  getPlayersForMatch,
  getRoomById
} from "@/lib/demo-data";

type RoomPageProps = {
  params: Promise<{ id: string }>;
};

export default async function RoomDetailsPage({ params }: RoomPageProps) {
  const { id } = await params;
  const room = getRoomById(id);

  if (!room) {
    return (
      <section className="card">
        <h1>Room not found</h1>
        <p className="meta">No room exists for id: {id}</p>
        <Link href="/rooms" className="btn">
          Back to rooms
        </Link>
      </section>
    );
  }

  const players = getPlayersForMatch(room.matchId);
  const lineups = getLineupsForRoom(room.id);
  const previewLineup = lineups[0];

  return (
    <section>
      <h1 className="section-title">{getMatchLabel(room.matchId)}</h1>
      <p className="meta">Room ID: {room.id}</p>

      <div className="grid">
        <article className="card">
          <h2 className="section-title">Room Status</h2>
          <dl className="kv">
            <div>
              <dt>Status</dt>
              <dd>{room.status}</dd>
            </div>
            <div>
              <dt>Entry Fee</dt>
              <dd>{room.entryFee} STT</dd>
            </div>
            <div>
              <dt>Max Participants</dt>
              <dd>{room.maxParticipants}</dd>
            </div>
            <div>
              <dt>Lineup Deadline</dt>
              <dd>{new Date(room.deadline).toLocaleString("en-GB", { timeZone: "UTC" })} UTC</dd>
            </div>
          </dl>

          <div className="btn-row" style={{ marginTop: "1rem" }}>
            <button className="btn primary" type="button">
              Join Room
            </button>
            <button className="btn" type="button">
              Submit Lineup
            </button>
          </div>
        </article>

        <PlayerPicker
          players={players}
          selectedIds={previewLineup?.playerIds ?? []}
          captainId={previewLineup?.captainId}
        />
      </div>

      {previewLineup ? (
        <div style={{ marginTop: "1rem" }}>
          <LineupCard lineup={previewLineup} players={players} />
        </div>
      ) : null}

      <div className="btn-row" style={{ marginTop: "1rem" }}>
        <Link className="btn ghost" href={`/rooms/${room.id}/results`}>
          View Results Page
        </Link>
      </div>
    </section>
  );
}
