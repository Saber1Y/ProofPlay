import { successResponse, toRouteErrorResponse } from "@/lib/server/api-response";
import { indexRoom } from "@/lib/server/services/rooms.service";
import { indexRoomBodySchema } from "@/lib/server/validators/rooms.validator";

export async function POST(request: Request) {
  try {
    const body = indexRoomBodySchema.parse(await request.json());
    const indexedRoom = await indexRoom(body);

    return successResponse({ room: indexedRoom }, 201);
  } catch (error) {
    return toRouteErrorResponse(error);
  }
}
