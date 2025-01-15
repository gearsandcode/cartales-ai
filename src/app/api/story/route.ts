import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { StoryRequest } from "@/types/story-sections";
import {
  generateIntroductionPrompt,
  generatePreviousOwnerPrompt,
  generateCurrentOwnerPrompt,
  generateConclusionPrompt,
} from "@/utils/story-generators";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "",
});

export async function POST(req: Request) {
  try {
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("Missing Anthropic API key");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const storyRequest: StoryRequest = await req.json();

    if (!storyRequest.type || !storyRequest.carDetails) {
      return NextResponse.json(
        { error: "Invalid request format" },
        { status: 400 }
      );
    }

    let prompt: string;
    switch (storyRequest.type) {
      case "introduction":
        prompt = generateIntroductionPrompt(storyRequest.carDetails);
        break;
      case "previousOwner":
        if (typeof storyRequest.ownerIndex !== "number") {
          return NextResponse.json(
            { error: "Owner index required for previous owner stories" },
            { status: 400 }
          );
        }
        prompt = generatePreviousOwnerPrompt(
          storyRequest.carDetails,
          storyRequest.ownerIndex
        );
        break;
      case "currentOwner":
        prompt = generateCurrentOwnerPrompt(
          storyRequest.carDetails,
          storyRequest.previousOwnerStories || []
        );
        break;
      case "conclusion":
        prompt = generateConclusionPrompt(storyRequest.carDetails);
        break;
      default:
        return NextResponse.json(
          { error: "Invalid story section type" },
          { status: 400 }
        );
    }

    try {
      const response = await anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      });

      const content = response.content[0];
      if (content.type !== "text") {
        throw new Error("Unexpected response format");
      }

      return NextResponse.json({
        content: content.text,
        section: storyRequest.type,
        ownerIndex: storyRequest.ownerIndex,
      });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      // Handle specific error cases
      if (error.status === 400) {
        return NextResponse.json(
          {
            error:
              JSON.stringify(error.error.error.message).replace(/"/g, "") ||
              "Invalid request",
          },
          { status: 400 }
        );
      }

      // Handle specific error cases
      if (error.status === 401) {
        return NextResponse.json(
          { error: "Invalid API key or authentication issue" },
          { status: 401 }
        );
      }

      if (error.status === 402) {
        return NextResponse.json(
          { error: "Usage limit exceeded or billing issue" },
          { status: 402 }
        );
      }

      if (error.status === 429) {
        return NextResponse.json(
          { error: "Rate limit exceeded" },
          { status: 429 }
        );
      }

      // Generic error fallback
      return NextResponse.json(
        { error: "Failed to generate story", details: error.message },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Request processing error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
