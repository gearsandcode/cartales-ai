import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ExtraCarDetails } from '../types/car-details';

interface DetailsTabProps {
  carDetails: ExtraCarDetails;
  onInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export function DetailsTab({ carDetails, onInputChange }: DetailsTabProps) {
  const initialCarDetails: ExtraCarDetails = {
    customizations: carDetails.customizations || '',
    maintenance: carDetails.maintenance || '',
  };
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="customizations">Customizations and Modifications</Label>
        <Textarea
          id="customizations"
          name="customizations"
          value={initialCarDetails.customizations}
          onChange={onInputChange}
          placeholder="Describe any modifications or customizations you made to the car (optional)"
          className="h-32"
        />
      </div>
      <div>
        <Label htmlFor="maintenance">Maintenance History</Label>
        <Textarea
          id="maintenance"
          name="maintenance"
          value={initialCarDetails.maintenance}
          onChange={onInputChange}
          placeholder="Describe any significant maintenance or repairs (optional)"
          className="h-32"
        />
      </div>
    </div>
  );
}
