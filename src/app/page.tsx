import { CarStoryGenerator } from "@/components/car-story-generator";
import { carQuotes } from "@/data/car-quotes";
import { headers } from "next/headers";

// Generate the quote using request timestamp
export default async function Home() {
  // Get headers
  const headersList = headers();
  const timestamp =
    (await headersList).get("x-request-timestamp") || Date.now().toString();
  const quoteIndex = Number(timestamp) % carQuotes.length;
  const quote = carQuotes[quoteIndex];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto py-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight">
            Car Tales AI
          </h1>
          <p className="text-l text-muted-foreground">{quote}</p>
        </div>
        <CarStoryGenerator />
      </div>
    </div>
  );
}
