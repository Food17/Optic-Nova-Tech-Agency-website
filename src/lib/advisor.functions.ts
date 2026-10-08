import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inputSchema = z.object({
  business: z.string().trim().min(3).max(300),
  goals: z.string().trim().min(10).max(1500),
  needs: z.string().trim().max(1500),
  budget: z.string().trim().max(50),
});

export const getRecommendations = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => inputSchema.parse(data))
  .handler(async ({ data }) => {
    const { recommendServices, AdvisorError } = await import("./advisor.server");
    try {
      return { ok: true as const, result: await recommendServices(data) };
    } catch (error) {
      const message = error instanceof AdvisorError ? error.message : "Something went wrong. Please try again.";
      return { ok: false as const, error: message };
    }
  });
