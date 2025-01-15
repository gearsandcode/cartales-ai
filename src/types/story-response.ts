import { StorySection } from "./story-sections";

export interface StoryResponse {
  content: string;
  section: StorySection;
  ownerIndex?: number;
}
