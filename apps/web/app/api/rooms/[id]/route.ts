import { successResponse, toRouteErrorResponse } from "@/lib/server/api-response";
import { getIndexedRoom } from "@/lib/server/services/rooms.service";
import { roomIdParamsSchema } from "@/lib/server/validators/rooms.validator";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const params = roomIdParamsSchema.parse(await context.params);
    const room = await getIndexedRoom(params.id);

    return successResponse({ room });
  } catch (error) {
    return toRouteErrorResponse(error);
  }
}
