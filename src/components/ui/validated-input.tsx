import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface ValidatedInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string | null;
  validate?: (value: string) => { isValid: boolean; message: string };
}

const ValidatedInput = React.forwardRef<HTMLInputElement, ValidatedInputProps>(
  ({ className, label, name, validate, onChange, onBlur, ...props }, ref) => {
    const [error, setError] = React.useState<string | null>(null);
    const [touched, setTouched] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(e);
      }

      if (validate && touched) {
        const result = validate(e.target.value);
        setError(result.isValid ? null : result.message);
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(e);
      }

      setTouched(true);
      if (validate) {
        const result = validate(e.target.value);
        setError(result.isValid ? null : result.message);
      }
    };

    return (
      <div className="space-y-2">
        <Label htmlFor={name}>
          {label} {validate && <span className="text-red-500">*</span>}
        </Label>
        <Input
          {...props}
          ref={ref}
          id={name}
          name={name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={cn(
            error && 'border-red-500 focus-visible:ring-red-500',
            className,
          )}
        />
        {error && touched && <p className="text-sm text-red-500">{error}</p>}
      </div>
    );
  },
);

ValidatedInput.displayName = 'ValidatedInput';

export { ValidatedInput };
