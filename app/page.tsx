"use client";

import { LinkInput } from "@/features/link-checker/components/LinkInput";
import { ResultCard } from "@/features/link-checker/components/ResultCard";
import { useCheckLink } from "@/features/link-checker/hooks/useCheckLink";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function Home() {
  const { checkUrl, result, isLoading, error } = useCheckLink();

  return (
    <div className="container px-4 py-16 md:py-24 mx-auto max-w-5xl flex flex-col items-center">
      <div className="text-center space-y-4 mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight lg:text-7xl">
          Is that link <span className="text-status-safe">Safe</span>?
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Paste any URL below to scan for phishing attempts, malware, and scams using our advanced detection engine.
        </p>
      </div>

      {/* Input Section */}
      <div className="w-full mb-8">
        <LinkInput onCheck={checkUrl} isLoading={isLoading} />
      </div>

      {/* Error State */}
      {error && (
        <Alert variant="destructive" className="max-w-2xl w-full mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {/* Result Section */}
      {result && <ResultCard result={result} />}
    </div>
  );
}