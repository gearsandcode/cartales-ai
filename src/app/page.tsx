import { CarStoryGenerator } from "@/components/car-story-generator";

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">Car Tales AI</h1>
      <p className="text-center text-muted-foreground mb-8">
        Generate personalized stories about your car's history
      </p>
      <CarStoryGenerator />
    </div>
  );
}
