export interface OwnershipPeriod {
  startYear: number;
  endYear: number;
  ownerName: string;
  purchasePrice?: number;
  salePrice?: number;
  acquiredFrom?: string;
  soldTo?: string;
  location?: string;
}

export interface OwnershipChain {
  currentOwner: OwnershipPeriod;
  previousOwners: OwnershipPeriod[];
}
