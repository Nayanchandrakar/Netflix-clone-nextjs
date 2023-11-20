import { z } from "zod";

export const signInFormSchmea = z.object({
  email: z.string().email().min(4),
  password: z.string().min(8).max(8),
});
