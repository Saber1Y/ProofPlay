import { successResponse, toRouteErrorResponse } from "@/lib/server/api-response";
import { getMatchPlayers } from "@/lib/server/services/matches.service";
import { matchIdParamsSchema } from "@/lib/server/validators/matches.validator";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const params = matchIdParamsSchema.parse(await context.params);
    const players = await getMatchPlayers(params.id);

    return successResponse({ matchId: params.id, players });
  } catch (error) {
    return toRouteErrorResponse(error);
  }
}
