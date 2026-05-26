import { successResponse, toRouteErrorResponse } from "@/lib/server/api-response";
import { listMatches } from "@/lib/server/services/matches.service";

export async function GET() {
  try {
    const matches = await listMatches();
    return successResponse({ matches });
  } catch (error) {
    return toRouteErrorResponse(error);
  }
}
