// src/app/api/story/route.ts
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

    if (
      !storyRequest.type ||
      !storyRequest.carDetails ||
      !storyRequest.ownershipChain
    ) {
      return NextResponse.json(
        { error: "Invalid request format - missing required fields" },
        { status: 400 }
      );
    }

    let prompt: string;
    const { ownershipChain, carDetails } = storyRequest;

    switch (storyRequest.type) {
      case "introduction":
        prompt = generateIntroductionPrompt(carDetails);
        break;

      case "previousOwner":
        if (typeof storyRequest.ownerIndex !== "number") {
          return NextResponse.json(
            { error: "Owner index required for previous owner stories" },
            { status: 400 }
          );
        }

        const currentPreviousOwner =
          ownershipChain.previousOwners[storyRequest.ownerIndex];
        const previousPreviousOwner =
          storyRequest.ownerIndex > 0
            ? ownershipChain.previousOwners[storyRequest.ownerIndex - 1]
            : null;
        const nextOwner =
          storyRequest.ownerIndex === ownershipChain.previousOwners.length - 1
            ? ownershipChain.currentOwner
            : ownershipChain.previousOwners[storyRequest.ownerIndex + 1];

        prompt = generatePreviousOwnerPrompt(
          carDetails,
          storyRequest.ownerIndex,
          currentPreviousOwner,
          previousPreviousOwner,
          nextOwner
        );
        break;

      case "currentOwner":
        const lastPreviousOwner =
          ownershipChain.previousOwners.length > 0
            ? ownershipChain.previousOwners[
                ownershipChain.previousOwners.length - 1
              ]
            : null;

        prompt = generateCurrentOwnerPrompt(
          carDetails,
          ownershipChain.currentOwner,
          lastPreviousOwner
        );
        break;

      case "conclusion":
        prompt = generateConclusionPrompt(
          carDetails,
          ownershipChain.currentOwner
        );
        break;

      default:
        return NextResponse.json(
          { error: "Invalid story section type" },
          { status: 400 }
        );
    }

    try {
      const response = await anthropic.messages.create({
        model: "claude-3-sonnet-20241022",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
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
      // Handle API-specific errors
      if (error.status === 400) {
        return NextResponse.json(
          { error: error.error?.message || "Invalid request to AI service" },
          { status: 400 }
        );
      }

      // Handle other specific error cases...
      return NextResponse.json(
        { error: "Failed to generate story section", details: error.message },
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
