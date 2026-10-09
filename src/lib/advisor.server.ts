import { createOpenAI } from "@ai-sdk/openai";
import { Output, streamText } from "ai";
import { z } from "zod";
import { services } from "@/data/services";

export const recommendationSchema = z.object({
  summary: z.string(),
  services: z.array(z.object({ slug: z.string(), reason: z.string(), priority: z.string() })),
  nextSteps: z.array(z.string()),
});
export type Recommendation = z.infer<typeof recommendationSchema>;

export class AdvisorError extends Error {
  constructor(message: string, public status: number) {
    super(message);
  }
}

export async function recommendServices(input: { business: string; goals: string; needs: string; budget: string }) {
  const apiKey = process.env['LOVABLE_API_KEY'];
  if (!apiKey) throw new AdvisorError("The advisor is not configured yet.", 401);

  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
  });

  const catalog = services.map((s) => `- ${s.slug}: ${s.title}`).join("\n");
  const instructions = `You advise prospective clients of Online Optic Nova, a digital agency. Recommend 2 to 4 services strictly from this catalog, using the exact slug:\n${catalog}\nFor each, give a specific one or two sentence reason tied to the client's goals and a priority of "Start here", "Next", or "Later". Write a two sentence summary and 3 to 4 concrete next steps, the last being to book a discovery call with the agency. Never invent statistics, prices, or guarantees. Never use em-dashes. Plain, confident, human tone.`;

  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      instructions,
      messages: [
        {
          role: "user",
          content: `Business: ${input.business}\nGoals: ${input.goals}\nNeeds or challenges: ${input.needs}\nBudget: ${input.budget || "Not specified"}`,
        },
      ],
      output: Output.object({ schema: recommendationSchema }),
      providerOptions: {
        openai: { store: false, forceReasoning: true, reasoningEffort: "low", include: ["reasoning.encrypted_content"] },
      },
    });
    const output = await result.output;
    const valid = new Set(services.map((s) => s.slug));
    return {
      summary: output.summary.replace(/—/g, ","),
      services: output.services.filter((s) => valid.has(s.slug)).slice(0, 4),
      nextSteps: output.nextSteps.slice(0, 5),
    } satisfies Recommendation;
  } catch (error) {
    const status = (error as { statusCode?: number }).statusCode ?? 500;
    if (status === 429) throw new AdvisorError("The advisor is busy right now. Please try again in a minute.", 429);
    if (status === 402 || status === 403) throw new AdvisorError("The advisor is unavailable at the moment. Please use the contact form instead.", status);
    console.error("Advisor error", error);
    throw new AdvisorError("We could not generate recommendations. Please try again.", 500);
  }
}
