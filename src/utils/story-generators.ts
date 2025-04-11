import { CarDetails } from '@/types/car-details';
import { OwnershipPeriod } from '@/types/ownership-chain';

export function resolvePlaceholderName(placeholder: string): string {
  const yearMatch = placeholder.match(/\[OWNER_NAME_(\d{4})\]/);
  if (!yearMatch) return placeholder;

  const year = parseInt(yearMatch[1]);
  return `[Generate a historically appropriate name for someone who owned this car in ${year}. Use common naming conventions from that era.]`;
}

export function generateIntroductionPrompt(details: CarDetails): string {
  return `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write an introduction about a ${details.year} ${details.make} ${details.model}. Focus on the model's history and significance.

Format Requirements:
1. Use markdown formatting
2. Use only verifiable facts, do not halucinate
3. Start with a catching title about the car model as a ## heading
4. Write about 50-100 words
5. Include technical specifications and historical context
6. Mention any notable achievements or recognition for this model
7. Include market reception and cultural impact if relevant

Keep the content focused on the general history and significance of this specific model. Do not include any owner-specific information.`;
}

export function generatePreviousOwnerPrompt(
  details: CarDetails,
  ownerIndex: number,
  ownerPeriod: OwnershipPeriod,
  previousPeriod: OwnershipPeriod | null,
  nextPeriod: OwnershipPeriod
): string {
  const ownerName = ownerPeriod.ownerName.startsWith('[OWNER_NAME_')
    ? resolvePlaceholderName(ownerPeriod.ownerName)
    : ownerPeriod.ownerName;

  const previousOwnerName = previousPeriod?.ownerName.startsWith('[OWNER_NAME_')
    ? resolvePlaceholderName(previousPeriod.ownerName)
    : previousPeriod?.ownerName;

  const nextOwnerName = nextPeriod.ownerName.startsWith('[OWNER_NAME_')
    ? resolvePlaceholderName(nextPeriod.ownerName)
    : nextPeriod.ownerName;

  const purchaseContext = previousPeriod
    ? `acquired from ${previousOwnerName} in ${
        ownerPeriod.startYear
      } for $${previousPeriod.salePrice?.toLocaleString()}`
    : `purchased as a ${
        ownerPeriod.startYear - parseInt(details.year)
      } year old car in ${ownerPeriod.startYear}`;

  const saleContext = `sold to ${nextOwnerName} in ${
    ownerPeriod.endYear
  } for $${ownerPeriod.salePrice?.toLocaleString()}`;

  return `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write a story about ${ownerName}'s ownership of a ${
    details.year
  } ${details.make} ${details.model}.
Timeline Context:
1. Previous Owner: ${previousOwnerName || 'Original owner'}
2. Current Owner: ${ownerName}
3. Next Owner: ${nextOwnerName}
4. Ownership Period: ${ownerPeriod.startYear} to ${ownerPeriod.endYear}
5. Location: ${ownerPeriod.location}
6. Acquisition: ${purchaseContext}
7. Sale: ${saleContext}

Format Requirements:
1. Use markdown formatting
2. Craft a catchy heading from the story incorporating the owner's first name as a ## heading
3. Write no more than 150 words total
4. IMPORTANT: Maintain exact consistency with the timeline details provided above
5. The first paragraph MUST reference exactly how and when they acquired the car using the provided acquisition context
6. The last paragraph MUST reference exactly how and when they sold the car using the provided sale context
7. Include specific maintenance records, dates, and costs
8. Generate a realistic backstory for this owner
9. Include any modifications and maintenance they realistically may have made to the car
10. Do not use the ¶ symbol or any special paragraph markers

Additional Requirements:
1. Create believable maintenance records with actual business names
2. Include realistic costs for the time period
3. Incorporate period-appropriate modifications
4. Detail the condition of the car during their ownership
5. Explain how they acquired and sold the car
6. Ensure that the ownership transfer aligns with the next owner's story
7. Make sure that the ownership transfer aligns with previous owner ${ownerIndex}

Remember: It is crucial that all dates, prices, and ownership transfers match EXACTLY with the provided timeline context.
The story should feel authentic and provide a clear picture of how this owner maintained and modified the car.`;
}

export function generateCurrentOwnerPrompt(
  details: CarDetails,
  currentOwner: OwnershipPeriod,
  previousOwner: OwnershipPeriod | null
): string {
  const previousOwnerName = previousOwner?.ownerName.startsWith('[OWNER_NAME_')
    ? resolvePlaceholderName(previousOwner.ownerName)
    : previousOwner?.ownerName;

  const customizationsText = details.customizations
    ? `\n\nCustomizations and Modifications: ${details.customizations}`
    : '';

  const maintenanceText = details.maintenance
    ? `\n\nMaintenance History: ${details.maintenance}`
    : '';

  const acquisitionContext = previousOwner
    ? `acquired from ${previousOwnerName} in ${
        currentOwner.startYear
      } for $${previousOwner.salePrice?.toLocaleString()}`
    : `purchased as a ${
        currentOwner.startYear - parseInt(details.year)
      } year old car in ${currentOwner.startYear}`;

  return `You are a storyteller specializing in writing engaging narratives about cars and their histories. Write the main story about ${
    details.ownerName
  }'s ownership of their ${details.year} ${details.make} ${details.model}.

Timeline Context:
1. Purchase year: ${details.purchaseYear}
2. Previous Owner: ${previousOwnerName || 'Original owner'}
3. Current Owner: ${details.ownerName}
4. Ownership duration: ${details.ownershipDuration}
5. Location: ${details.location}
6. Acquisition: ${acquisitionContext}

Additional Requirements:
1. Include the customizations: ${customizationsText} in the story
2. Include the maintenance: ${maintenanceText} in the story

Format Requirements:
1. Use markdown formatting
2. Use previous owner stories for context and do not contridict them with time lines and locations
3. Start with "## ${details.ownerName}'s Story" as a heading
4. Write about 300-400 words
5. Include specific maintenance records, dates, and costs
6. Detail the emotional connection to the car
7. Do not use the ¶ symbol or any special paragraph markers

Remember: It is crucial that all dates, prices, and ownership transfers match EXACTLY with the provided timeline context.
Focus on creating a personal narrative that shows the relationship between ${
    details.ownerName
  } and their car, including all maintenance and modifications made during their ownership.`;
}

export function generateConclusionPrompt(
  details: CarDetails,
  currentOwner: OwnershipPeriod
): string {
  return `Write a conclusion for the story of ${details.ownerName}'s ${details.year} ${details.make} ${details.model}.

Timeline Context:
1. Owner: ${currentOwner.ownerName}
2. Final Year: ${currentOwner.endYear}
3. Departure Story: ${details.departureStory}

Format Requirements:
1. Use markdown formatting
2. Start with "## Farewell" as a heading
3. Write about 100-150 words
4. Reference the exact year when discussing the end of ownership
5. Include the provided departure story details
6. Do not use the ¶ symbol or any special paragraph markers

Create a satisfying ending that wraps up the car's journey while maintaining consistency with the timeline.`;
}
