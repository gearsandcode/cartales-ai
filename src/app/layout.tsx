import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GitHubCorner } from "@/components/github-corner";
import { Coffee, Heart } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Car Tales AI",
  description: "Generate personalized stories about your car's history",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GitHubCorner />
        <main className="min-h-screen bg-background">{children}</main>
        <footer className="mb-6 text-center text-sm text-muted-foreground">
          <div className="flex items-center justify-center space-x-2">
            <span>Built with</span> <Heart /> <span>+</span> <Coffee />
            <span>in Seattle, WA by</span>
            <a
              href="https://github.com/gearsandcode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Jesse Clark (gearsandcode)
            </a>
            &nbsp; using Claude API, Next.js, Tailwind, React, and Vercel.
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span>
              Issues or feature requests? Add them on{" "}
              <a
                href="https://github.com/gearsandcode/cartales-ai/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                GitHub
              </a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
