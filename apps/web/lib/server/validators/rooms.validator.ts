import { z } from "zod";

export const roomIdParamsSchema = z.object({
  id: z.string().min(1, "Room id is required")
});

export const indexRoomBodySchema = z.object({
  roomId: z.string().min(1),
  roomAddress: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
  chainId: z.number().int().positive(),
  matchId: z.string().min(1),
  metadata: z.record(z.string(), z.unknown()).optional()
});

export type RoomIdParams = z.infer<typeof roomIdParamsSchema>;
export type IndexRoomBody = z.infer<typeof indexRoomBodySchema>;
