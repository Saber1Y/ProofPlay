import { z } from "zod";

export const matchIdParamsSchema = z.object({
  id: z.string().min(1, "Match id is required")
});

export type MatchIdParams = z.infer<typeof matchIdParamsSchema>;
