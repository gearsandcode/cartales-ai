"use client";

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { StoryRequest } from "@/types/story-sections";
import { StoryResponse } from "@/types/story-response";

interface FieldValidation {
  isValid: boolean;
  message: string;
}

export interface FormValidation {
  [key: string]: FieldValidation;
}

export function CarStoryGenerator() {
  const [carDetails, setCarDetails] = useState<CarDetails>(initialCarDetails);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [storyParts, setStoryParts] = useState<StoryResponse[]>([]);

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
    const requiredFields: (keyof CarDetails)[] = [
      "year",
      "make",
      "model",
      "ownerName",
      "purchaseYear",
      "ownershipDuration",
      "location",
    ];

    const validations: Record<string, (value: string) => [boolean, string]> = {
      year: (value) => [/^\d{4}$/.test(value), "Year must be a 4-digit number"],
      make: (value) => [
        value.length >= 2,
        "Make must be at least 2 characters",
      ],
      model: (value) => [
        value.length >= 2,
        "Model must be at least 2 characters",
      ],
      ownerName: (value) => [
        value.length >= 2,
        "Name must be at least 2 characters",
      ],
      purchaseYear: (value) => {
        if (!/^\d{4}$/.test(value))
          return [false, "Purchase year must be a 4-digit number"];
        if (parseInt(value) < parseInt(carDetails.year)) {
          return [false, "Purchase year cannot be before car's year"];
        }
        return [true, ""];
      },
      ownershipDuration: (value) => [
        value.length >= 1,
        "Please specify ownership duration",
      ],
      location: (value) => [
        value.length >= 2,
        "Location must be at least 2 characters",
      ],
    };

    let firstError = "";
    const invalidFields = requiredFields.filter((field) => {
      const value = carDetails[field as keyof CarDetails];
      const [isValid, errorMsg] = validations[field](value.toString());
      if (!isValid && !firstError) {
        firstError = errorMsg;
      }
      return !isValid;
    });

    if (invalidFields.length > 0) {
      setError(firstError);
      return false;
    }

    const emptyFields = requiredFields.filter(
      (field) => !carDetails[field as keyof CarDetails]
    );

    if (emptyFields.length > 0) {
      setError(`Please fill in all required fields: ${emptyFields.join(", ")}`);
      return false;
    }
    return true;
  };

  const generateStorySection = async (
    request: StoryRequest
  ): Promise<StoryResponse> => {
    const response = await fetch("/api/story", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    });

    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || "Failed to generate story section");
    }

    return response.json();
  };

  const generateCompleteStory = async () => {
    if (!validateInputs()) return;

    setIsLoading(true);
    setError(null);
    setStoryParts([]);

    try {
      // Generate introduction
      const intro = await generateStorySection({
        type: "introduction",
        carDetails,
      });
      setStoryParts((prev) => [...prev, intro]);

      // Generate previous owner stories
      const numPreviousOwners =
        carDetails.previousOwners === "random"
          ? Math.floor(Math.random() * 3) + 1
          : carDetails.previousOwners;

      const previousOwnerStories: StoryResponse[] = [];
      for (let i = 0; i < numPreviousOwners; i++) {
        const prevOwner = await generateStorySection({
          type: "previousOwner",
          carDetails,
          ownerIndex: i,
        });
        previousOwnerStories.push(prevOwner);
        setStoryParts((prev) => [...prev, prevOwner]);
      }

      // Generate current owner's story
      const currentOwner = await generateStorySection({
        type: "currentOwner",
        carDetails,
        previousOwnerStories: previousOwnerStories.map(
          (story) => story.content
        ),
      });
      setStoryParts((prev) => [...prev, currentOwner]);

      // Generate conclusion
      const conclusion = await generateStorySection({
        type: "conclusion",
        carDetails,
      });
      setStoryParts((prev) => [...prev, conclusion]);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate story");
    } finally {
      setIsLoading(false);
    }
  };

  const combinedStory = storyParts
    .sort((a, b) => {
      const sectionOrder = {
        introduction: 0,
        previousOwner: 1,
        currentOwner: 2,
        conclusion: 3,
      };
      return sectionOrder[a.section] - sectionOrder[b.section];
    })
    .map((part) => part.content)
    .join("\n\n");

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Tell us about your car</CardTitle>
          <CardDescription>
            Fill in the details below to generate a personalized story about
            your car
          </CardDescription>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive" className="mb-4">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="basic" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
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
            onClick={generateCompleteStory}
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

      <StoryDisplay story={combinedStory} />
    </div>
  );

  // const generateStory = async () => {
  //   if (!validateInputs()) return;

  //   setIsLoading(true);
  //   setError(null);

  //   try {
  //     const response = await fetch("/api/story", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         prompt: generatePrompt(carDetails),
  //       }),
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.error || "Failed to generate story");
  //     }

  //     setGeneratedStory(data.content);
  //   } catch (err) {
  //     setError(err instanceof Error ? err.message : "Failed to generate story");
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // return (
  //   <div className="w-full max-w-4xl mx-auto">
  //     <Card>
  //       <CardHeader>
  //         <CardTitle>Tell us about your car</CardTitle>
  //         <CardDescription>
  //           Fill in the details below to generate a personalized story about
  //           your car
  //         </CardDescription>
  //       </CardHeader>
  //       <CardContent>
  //         {error && (
  //           <Alert variant="destructive" className="mb-4">
  //             <AlertDescription>{error}</AlertDescription>
  //           </Alert>
  //         )}

  //         <Tabs defaultValue="basic" className="space-y-4">
  //           <TabsList className="grid w-full grid-cols-2">
  //             <TabsTrigger value="basic">Basic Info</TabsTrigger>
  //             <TabsTrigger value="details">Additional Details</TabsTrigger>
  //           </TabsList>

  //           <TabsContent value="basic">
  //             <BasicInfoTab
  //               carDetails={carDetails}
  //               onInputChange={handleInputChange}
  //               onPreviousOwnersChange={handlePreviousOwnersChange}
  //               // fieldValidation={fieldValidation}
  //             />
  //           </TabsContent>

  //           <TabsContent value="details">
  //             <DetailsTab
  //               carDetails={carDetails}
  //               onInputChange={handleInputChange}
  //             />
  //           </TabsContent>
  //         </Tabs>
  //       </CardContent>
  //       <CardFooter>
  //         <Button
  //           onClick={generateStory}
  //           className="w-full"
  //           disabled={isLoading}
  //         >
  //           {isLoading ? (
  //             <>
  //               <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
  //               Generating Story...
  //             </>
  //           ) : (
  //             "Generate Story"
  //           )}
  //         </Button>
  //       </CardFooter>
  //     </Card>

  //     <StoryDisplay story={generatedStory} />
  //   </div>
  // );
}
