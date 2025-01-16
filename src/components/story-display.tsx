import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef, useState } from "react";

interface StoryDisplayProps {
  story: string;
}

export function StoryDisplay({ story }: StoryDisplayProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    // Auto-scroll when content changes
    if (contentRef.current) {
      const scrollOptions: ScrollIntoViewOptions = {
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      };
      contentRef.current.scrollIntoView(scrollOptions);
    }
  }, [story]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!story) return null;

  return (
    <Card className="mt-6">
      <CardContent>
        <div
          className="prose prose-slate max-w-none prose-headings:mb-4 prose-headings:mt-6 prose-h1:text-3xl prose-h2:text-2xl prose-p:my-4 prose-p:leading-relaxed"
          ref={contentRef}
          style={{ paddingBottom: "2rem" }} // Add padding at the bottom
        >
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
        {showScrollToTop && (
          <Button
            onClick={scrollToTop}
            className="sticky bottom-4 right-4"
            style={{ position: "fixed" }}
          >
            Scroll to top
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
