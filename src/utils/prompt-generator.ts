// utils/prompt-generator.ts
import { CarDetails } from "../types/car-details";

export function generatePrompt(details: CarDetails): string {
  const customizationsText = details.customizations
    ? `\n\nCustomizations and Modifications: ${details.customizations}`
    : "";

  const maintenanceText = details.maintenance
    ? `\n\nMaintenance History: ${details.maintenance}`
    : "";

  return `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write a story about a ${
    details.year
  } ${details.make} ${details.model} owned by ${
    details.ownerName
  }. The story should feel personal and evoke the emotional connection between cars and their owners.

Format Requirements:
1. Structure the story in clear, well-spaced paragraphs with line breaks between them
2. Use markdown formatting
3. Start with a title in # heading format
4. Break the story into logical sections using ## subheadings
5. Each paragraph should be 3-5 sentences long
6. Include exactly one empty line between paragraphs
7. Do not use bullet points or numbered lists in the narrative
8. Keep the total story length to roughly 1000-1500 words to ensure completeness

Additional Requirements:
1. Generate realistic maintenance records and costs for both the current owner and previous owners
2. The maintenance records should reference actual businesses or mechanics and the costs should be accruate for the time period
3. For any modifications mentioned, include realistic costs and dates
4. Create a believable progression of the car's condition and value over time
5. Include specific details about repairs, costs, and dates throughout the narrative
6. Incorporate period-appropriate modifications and maintenance issues
7. Always ensure the story has a proper conclusion

Story Requirements:
1. Purchase year: The car was purchased in ${details.purchaseYear}
2. Time Period: The story should cover ${details.ownershipDuration} of ownership
3. Location: The events take place in ${details.location}
4. Acquisition: Include how they got the car: ${details.acquisitionStory}
5. Departure: Include how they parted with the car: ${details.departureStory}
${
  details.previousOwners === "random"
    ? "6. Generate 1-3 previous owners with realistic backstories, including random but realistic maintenance records and modifications they may have made"
    : `6. Include exactly ${details.previousOwners} previous owner${
        details.previousOwners === 1 ? "" : "s"
      } with realistic backstories, including maintenance and modifications they may have made`
}${customizationsText}${maintenanceText}

Required Story Structure:
1. Introduction (about 80-100 words): Brief history of the car model and its significance
2. Previous Owners (if any) (about 100 words per owner): Each previous owner's story
3. Main Story (about 500-600 words): The current owner's experience
4. Conclusion (about 100-150 words): The departure story and final reflections

Please ensure the story has a proper ending that wraps up all narrative threads.

Style Guidelines:
1. Write in a warm, personal tone that evokes emotion
2. Include specific details about the car's features and modifications
3. Incorporate sensory details (sounds, smells, feelings)
4. Balance technical details with personal narrative
5. Maintain a clear narrative flow between paragraphs
6. Use realistic prices and timeframes for all maintenance and modifications
7. Include specific technical details about repairs and modifications when relevant

Example Price References:
- Major engine work: $2,000-$5,000
- Transmission rebuilds: $1,500-$3,500
- Paint jobs: $1,000-$4,000
- Basic maintenance (oil changes, tune-ups): $50-$300
- Performance modifications: $500-$3,000 per modification
- Interior restoration: $1,000-$5,000

Example Timeline Structure:
# The Journey of a ${details.year} ${details.make} ${details.model}

## The Car's Origins
[Model history and significance]

## Previous Ownership
[Previous owner stories with detailed maintenance and modification records]

## ${details.ownerName}'s Story
[Main narrative with chronological progression of maintenance and modifications]

## Farewell
[Departure story and final condition of the vehicle]`;
}
