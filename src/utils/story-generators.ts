import { CarDetails } from "@/types/car-details";

export function generateIntroductionPrompt(details: CarDetails): string {
  return `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write an introduction about a ${details.year} ${details.make} ${details.model}. Focus on the model's history and significance.

Format Requirements:
1. Use markdown formatting
2. Use only verifiable facts, do not halucinate
3. Start with a catching title about the car model
4. Write about 50-100 words
5. Include technical specifications and historical context
6. Mention any notable achievements or recognition for this model
7. Include market reception and cultural impact if relevant

Keep the content focused on the general history and significance of this specific model. Do not include any owner-specific information.`;
}

export function generatePreviousOwnerPrompt(
  details: CarDetails,
  ownerIndex: number
): string {
  return `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write a story about a previous owner (owner #${
    ownerIndex + 1
  }) of a ${details.year} ${details.make} ${details.model}.

Format Requirements:
1. Use markdown formatting
2. Craft a cathy heading from the story incorpating the owners first name as a heading
3. Write no more than 150 words total
4. Include specific maintenance records, dates, and costs
5. Generate a realistic backstory for this owner
6. Include any modifications and maintainance they realisticly may have made to the car

Additional Requirements:
1. Create believable maintenance records with actual business names
2. Include realistic costs for the time period
3. Incorporate period-appropriate modifications
4. Detail the condition of the car during their ownership
5. Explain how they acquired and sold the car
6. Ensure that the ownership transfer aligns with the next owner's story
7. Make sure that the ownership transfer aligns with the timeline of the next owners acquisition of the car

The story should feel authentic and provide a clear picture of how this owner maintained and modified the car.`;
}

export function generateCurrentOwnerPrompt(
  details: CarDetails,
  previousOwnerStories: string[]
): string {
  const customizationsText = details.customizations
    ? `\n\nCustomizations and Modifications: ${details.customizations}`
    : "";

  const maintenanceText = details.maintenance
    ? `\n\nMaintenance History: ${details.maintenance}`
    : "";

  const previousContext =
    previousOwnerStories.length > 0
      ? `\n\nPrevious owner history (for context): ${previousOwnerStories.join(
          "\n"
        )}`
      : "";

  return `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write the main story about ${details.ownerName}'s ownership of their ${details.year} ${details.make} ${details.model}.

Format Requirements:
1. Use markdown formatting
2. Use previous owner stories for context and do not contridict them with time lines and locations
3. Start with "## ${details.ownerName}'s Story" as a heading
4. Write about 300-400 words
5. Include specific maintenance records, dates, and costs
6. Detail the emotional connection to the car

Story Details:
1. Purchase year: ${details.purchaseYear}
2. Ownership duration: ${details.ownershipDuration}
3. Location: ${details.location}
4. Acquisition story: ${details.acquisitionStory}${customizationsText}${maintenanceText}${previousContext}

Focus on creating a personal narrative that shows the relationship between ${details.ownerName} and their car, including all maintenance and modifications made during their ownership.`;
}

export function generateConclusionPrompt(details: CarDetails): string {
  return `Write a conclusion for the story of ${details.ownerName}'s ${details.year} ${details.make} ${details.model}.

Format Requirements:
1. Use markdown formatting
2. Start with "## Farewell" as a heading
3. Write about 100-150 words
4. Include the departure story: ${details.departureStory}
5. Add final reflections on the car's journey

Create a satisfying ending that wraps up the car's story and provides closure.`;
}
