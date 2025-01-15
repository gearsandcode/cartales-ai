import { CarDetails } from "./car-details";
import { OwnershipChain } from "./ownership-chain";

export type StorySection =
  | "introduction"
  | "previousOwner"
  | "currentOwner"
  | "conclusion";

export interface StoryRequest {
  type: StorySection;
  carDetails: CarDetails;
  ownershipChain: OwnershipChain;
  ownerIndex?: number;
  previousOwnerStories?: string[];
}

export interface StoryResponse {
  content: string;
  section: StorySection;
  ownerIndex?: number;
}
