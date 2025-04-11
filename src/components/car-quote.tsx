'use client';

import { useId } from 'react';
import { getRandomQuote } from '@/data/car-quotes';

export function CarQuote() {
  // Generate a unique ID for this instance
  const id = useId();
  // Use the ID to generate a quote that will be consistent between renders
  const quote = getRandomQuote();

  return (
    <p key={id} className="text-xl text-muted-foreground max-w-2xl mx-auto">
      {quote}
    </p>
  );
}
