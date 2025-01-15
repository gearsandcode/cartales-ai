"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ReloadIcon } from "@radix-ui/react-icons";
import { CarDetails, initialCarDetails } from "../types/car-details";
import { BasicInfoTab } from "./basic-info-tab";
import { DetailsTab } from "./details-tab";
import { StoryDisplay } from "./story-display";
import { generatePrompt } from "../utils/prompt-generator";

export function CarStoryGenerator() {
  const [carDetails, setCarDetails] = useState<CarDetails>(initialCarDetails);
  const [generatedStory, setGeneratedStory] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    setCarDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null);
  };

  const handlePreviousOwnersChange = (value: string) => {
    setCarDetails((prev) => ({
      ...prev,
      previousOwners: value === "random" ? "random" : parseInt(value),
    }));
  };

  const validateInputs = (): boolean => {
    const requiredFields = [
      "year",
      "make",
      "model",
      "ownerName",
      "purchaseYear",
      "ownershipDuration",
      "location",
    ];
    const emptyFields = requiredFields.filter(
      (field) => !carDetails[field as keyof CarDetails]
    );

    if (emptyFields.length > 0) {
      setError(`Please fill in all required fields: ${emptyFields.join(", ")}`);
      return false;
    }
    return true;
  };

  const generateStory = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: generatePrompt(carDetails),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to generate story");
      }

      setGeneratedStory(data.content);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate story");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Tell us about your car</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="basic" className="space-y-4">
            <TabsList>
              <TabsTrigger value="basic">Basic Info</TabsTrigger>
              <TabsTrigger value="details">Additional Details</TabsTrigger>
            </TabsList>

            <TabsContent value="basic">
              <BasicInfoTab
                carDetails={carDetails}
                onInputChange={handleInputChange}
                onPreviousOwnersChange={handlePreviousOwnersChange}
              />
            </TabsContent>

            <TabsContent value="details">
              <DetailsTab
                carDetails={carDetails}
                onInputChange={handleInputChange}
              />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button
            onClick={generateStory}
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Generating Story...
              </>
            ) : (
              "Generate Story"
            )}
          </Button>
        </CardFooter>
      </Card>

      <StoryDisplay story={generatedStory} />
    </div>
  );
}
