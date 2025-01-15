import { CarDetails } from "./car-details";

export type StorySection =
  | "introduction"
  | "previousOwner"
  | "currentOwner"
  | "conclusion";

export interface StoryRequest {
  type: StorySection;
  carDetails: CarDetails;
  ownerIndex?: number; // For previous owners
  previousOwnerStories?: string[]; // Pass previous stories for context
}
