// components/BasicInfoTab.tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { CarDetails } from "../types/car-details";

interface BasicInfoTabProps {
  carDetails: CarDetails;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPreviousOwnersChange: (value: string) => void;
}

export function BasicInfoTab({
  carDetails,
  onInputChange,
  onPreviousOwnersChange,
}: BasicInfoTabProps) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="year">Year *</Label>
            <Input
              id="year"
              name="year"
              value={carDetails.year}
              onChange={onInputChange}
              placeholder="e.g., 1970"
            />
          </div>
          <div>
            <Label htmlFor="make">Make *</Label>
            <Input
              id="make"
              name="make"
              value={carDetails.make}
              onChange={onInputChange}
              placeholder="e.g., Chevrolet"
            />
          </div>
          <div>
            <Label htmlFor="model">Model *</Label>
            <Input
              id="model"
              name="model"
              value={carDetails.model}
              onChange={onInputChange}
              placeholder="e.g., Monte Carlo"
            />
          </div>
          <div>
            <Label htmlFor="ownerName">Owner Name *</Label>
            <Input
              id="ownerName"
              name="ownerName"
              value={carDetails.ownerName}
              onChange={onInputChange}
              placeholder="e.g., Jesse"
            />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <Label htmlFor="purchaseYear">Purchase year *</Label>
            <Input
              id="purchaseYear"
              name="purchaseYear"
              value={carDetails.purchaseYear}
              onChange={onInputChange}
              placeholder="e.g., 1995"
            />
          </div>
          <div>
            <Label htmlFor="ownershipDuration">Ownership Duration *</Label>
            <Input
              id="ownershipDuration"
              name="ownershipDuration"
              value={carDetails.ownershipDuration}
              onChange={onInputChange}
              placeholder="e.g., 5 years"
            />
          </div>
          <div>
            <Label htmlFor="location">Location *</Label>
            <Input
              id="location"
              name="location"
              value={carDetails.location}
              onChange={onInputChange}
              placeholder="e.g., Independence, MO"
            />
          </div>
          <div>
            <Label htmlFor="acquisitionStory">How did you get the car?</Label>
            <Input
              id="acquisitionStory"
              name="acquisitionStory"
              value={carDetails.acquisitionStory}
              onChange={onInputChange}
              placeholder="Brief story of how you got the car"
            />
          </div>
          <div>
            <Label htmlFor="departureStory">
              How did you part with the car?
            </Label>
            <Input
              id="departureStory"
              name="departureStory"
              value={carDetails.departureStory}
              onChange={onInputChange}
              placeholder="Brief story of how the car left your possession"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <Label>Previous Owners</Label>
        <RadioGroup
          defaultValue="random"
          onValueChange={onPreviousOwnersChange}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="random" id="random" />
            <Label htmlFor="random">Random</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0" id="none" />
            <Label htmlFor="none">None</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="1" id="one" />
            <Label htmlFor="one">One</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="2" id="two" />
            <Label htmlFor="two">Two</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
