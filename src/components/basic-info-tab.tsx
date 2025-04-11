import { ValidatedInput } from '@/components/ui/validated-input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { BasicCarDetails } from '../types/car-details';

interface BasicInfoTabProps {
  carDetails: BasicCarDetails;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPreviousOwnersChange: (value: string) => void;
}

export function BasicInfoTab({
  carDetails,
  onInputChange,
  onPreviousOwnersChange,
}: BasicInfoTabProps) {
  const initialCarDetails: BasicCarDetails = {
    year: carDetails.year || '',
    make: carDetails.make || '',
    model: carDetails.model || '',
    ownerName: carDetails.ownerName || '',
    purchaseYear: carDetails.purchaseYear || '',
    ownershipDuration: carDetails.ownershipDuration || '',
    location: carDetails.location || '',
    acquisitionStory: carDetails.acquisitionStory || '',
    departureStory: carDetails.departureStory || '',
    previousOwners: carDetails.previousOwners || 'random',
  };

  const validations = {
    year: (value: string) => ({
      isValid: /^\d{4}$/.test(value),
      message: 'Year must be a 4-digit number',
    }),
    make: (value: string) => ({
      isValid: value.length >= 2,
      message: 'Make must be at least 2 characters',
    }),
    model: (value: string) => ({
      isValid: value.length >= 2,
      message: 'Model must be at least 2 characters',
    }),
    ownerName: (value: string) => ({
      isValid: value.length >= 2,
      message: 'Name must be at least 2 characters',
    }),
    purchaseYear: (value: string) => {
      if (!/^\d{4}$/.test(value))
        return {
          isValid: false,
          message: 'Purchase year must be a 4-digit number',
        };
      if (carDetails.year && parseInt(value) < parseInt(carDetails.year))
        return {
          isValid: false,
          message: "Purchase year cannot be before car's year",
        };
      return { isValid: true, message: '' };
    },
    ownershipDuration: (value: string) => ({
      isValid: value.length >= 1,
      message: 'Please specify ownership duration',
    }),
    location: (value: string) => ({
      isValid: value.length >= 2,
      message: 'Location must be at least 2 characters',
    }),
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <ValidatedInput
            label="Year"
            name="year"
            value={initialCarDetails.year}
            onChange={onInputChange}
            placeholder="e.g., 1970"
            validate={validations.year}
          />
          <ValidatedInput
            label="Make"
            name="make"
            value={initialCarDetails.make}
            onChange={onInputChange}
            placeholder="e.g., Chevrolet"
            validate={validations.make}
          />
          <ValidatedInput
            label="Model"
            name="model"
            value={initialCarDetails.model}
            onChange={onInputChange}
            placeholder="e.g., Monte Carlo"
            validate={validations.model}
          />
          <ValidatedInput
            label="Owner Name"
            name="ownerName"
            value={initialCarDetails.ownerName}
            onChange={onInputChange}
            placeholder="e.g., Jesse"
            validate={validations.ownerName}
          />
        </div>
        <div className="space-y-6">
          <ValidatedInput
            label="Purchase Year"
            name="purchaseYear"
            value={initialCarDetails.purchaseYear}
            onChange={onInputChange}
            placeholder="e.g., 1995"
            validate={validations.purchaseYear}
          />
          <ValidatedInput
            label="Ownership Duration"
            name="ownershipDuration"
            value={initialCarDetails.ownershipDuration}
            onChange={onInputChange}
            placeholder="e.g., 5 years"
            validate={validations.ownershipDuration}
          />
          <ValidatedInput
            label="Location"
            name="location"
            value={initialCarDetails.location}
            onChange={onInputChange}
            placeholder="e.g., Independence, MO"
            validate={validations.location}
          />
          <ValidatedInput
            label="How did you get the car?"
            name="acquisitionStory"
            value={initialCarDetails.acquisitionStory}
            onChange={onInputChange}
            placeholder="Brief story of how you got the car"
          />
          <ValidatedInput
            label="How did you part with the car?"
            name="departureStory"
            value={initialCarDetails.departureStory}
            onChange={onInputChange}
            placeholder="Brief story of how the car left your possession"
          />
        </div>
      </div>

      <div className="mt-6">
        <Label>Previous Owners</Label>
        <RadioGroup
          defaultValue="random"
          onValueChange={onPreviousOwnersChange}
          className="flex space-x-4 mt-2"
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
