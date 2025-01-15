// components/StoryDisplay.tsx
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

interface StoryDisplayProps {
  story: string;
}

export function StoryDisplay({ story }: StoryDisplayProps) {
  const [truncatedWarning, setTruncatedWarning] = useState(false);

  useEffect(() => {
    // Check for potential truncation markers
    const possiblyTruncated =
      !story.toLowerCase().includes("## farewell") || // Missing conclusion section
      !story.toLowerCase().includes("departed") || // No mention of departure
      story.endsWith("...") || // Ends with ellipsis
      story.endsWith(".") || // Ends mid-sentence
      !story.endsWith("\n"); // No final newline

    setTruncatedWarning(possiblyTruncated);
  }, [story]);

  if (!story) return null;

  return (
    <>
      {truncatedWarning && (
        <Alert className="mt-6 mb-2">
          <AlertDescription>
            The generated story might have been truncated. You may want to try
            generating it again with fewer previous owners or less detailed
            maintenance history.
          </AlertDescription>
        </Alert>
      )}
      <Card className="mt-6">
        <CardContent>
          <div className="prose prose-slate max-w-none prose-headings:mb-4 prose-headings:mt-6 prose-h1:text-3xl prose-h2:text-2xl prose-p:my-4 prose-p:leading-relaxed">
            <ReactMarkdown
              components={{
                h1: ({ ...props }) => (
                  <h1
                    className="text-3xl font-bold mb-6 text-primary"
                    {...props}
                  />
                ),
                h2: ({ ...props }) => (
                  <h2
                    className="text-2xl font-semibold mb-4 mt-8 text-primary/80"
                    {...props}
                  />
                ),
                p: ({ ...props }) => (
                  <p className="mb-4 leading-relaxed" {...props} />
                ),
              }}
            >
              {story}
            </ReactMarkdown>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
