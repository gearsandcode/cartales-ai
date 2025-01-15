import { CarStoryGenerator } from "@/components/car-story-generator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto py-10">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight">
            Car Tales AI
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Generate personalized stories about your car&#39;s history, bringing
            its journey to life through engaging narratives.
          </p>
        </div>
        <CarStoryGenerator />
      </div>
    </div>
  );
}
