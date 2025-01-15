// src/app/api/story/route.ts
import { NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY || "", // Fallback to empty string to catch missing key
});

export async function POST(req: Request) {
  try {
    // First check if API key exists
    if (!process.env.ANTHROPIC_API_KEY) {
      console.error("Missing Anthropic API key");
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    try {
      const response = await anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1024,
        messages: [{ role: "user", content: prompt }],
      });

      // Get the first content block
      const content = response.content[0];

      // Check if it's a text block
      if (content.type !== "text") {
        throw new Error("Unexpected response format");
      }

      return NextResponse.json({ content: content.text });
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
