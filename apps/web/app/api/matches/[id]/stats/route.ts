import { successResponse, toRouteErrorResponse } from "@/lib/server/api-response";
import { getMatchStats } from "@/lib/server/services/matches.service";
import { matchIdParamsSchema } from "@/lib/server/validators/matches.validator";

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  try {
    const params = matchIdParamsSchema.parse(await context.params);
    const stats = await getMatchStats(params.id);

    return successResponse(stats);
  } catch (error) {
    return toRouteErrorResponse(error);
  }
}
