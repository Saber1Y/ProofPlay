import { RoomCard } from "@/components/RoomCard";
import { demoRooms, getMatchLabel } from "@/lib/demo-data";

export default function RoomsPage() {
  return (
    <section>
      <h1 className="section-title">Match Rooms</h1>
      <p className="meta">Open, locked, and settled single-match fantasy contests.</p>

      <div className="list">
        {demoRooms.map((room) => (
          <RoomCard key={room.id} room={room} matchLabel={getMatchLabel(room.matchId)} />
        ))}
      </div>
    </section>
  );
}
