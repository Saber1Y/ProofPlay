import { HttpError } from "../http-error";
import type { IndexRoomBody } from "../validators/rooms.validator";

type IndexedRoom = IndexRoomBody & {
  indexedAt: string;
};

const roomStore = new Map<string, IndexedRoom>();

export async function indexRoom(payload: IndexRoomBody) {
  const indexedRoom: IndexedRoom = {
    ...payload,
    indexedAt: new Date().toISOString()
  };

  roomStore.set(payload.roomId, indexedRoom);

  return indexedRoom;
}

export async function getIndexedRoom(roomId: string) {
  const room = roomStore.get(roomId);

  if (!room) {
    throw new HttpError(404, "ROOM_NOT_FOUND", `Room ${roomId} is not indexed yet`);
  }

  return room;
}
