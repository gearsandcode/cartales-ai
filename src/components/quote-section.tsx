"use client";

import { getRandomQuote } from "@/data/car-quotes";
import { useState, useEffect } from "react";

export function QuoteSection() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);

  return (
    <div className="text-center mb-12">
      <h1 className="text-5xl font-bold text-primary mb-4 tracking-tight">
        Car Tales AI
      </h1>
      <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
        {quote || "Loading a quote..."}
      </p>
    </div>
  );
}
