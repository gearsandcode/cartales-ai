// types/car-details.ts

export type CarDetails = {
  year: string;
  make: string;
  model: string;
  ownerName: string;
  purchaseYear: string;
  ownershipDuration: string;
  location: string;
  acquisitionStory: string;
  departureStory: string;
  previousOwners: "random" | number;
  customizations: string; // Free-form text describing modifications
  maintenance: string; // Free-form text describing maintenance history
};

export const initialCarDetails: CarDetails = {
  year: "",
  make: "",
  model: "",
  ownerName: "",
  purchaseYear: "",
  ownershipDuration: "",
  location: "",
  acquisitionStory: "",
  departureStory: "",
  previousOwners: "random",
  customizations: "",
  maintenance: "",
};
