import { useState } from "react";
import { checkLinkFn } from "../api/check-link";
import { CheckResult } from "../types";
import { validateUrl } from "../utils/validators";

export const useCheckLink = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CheckResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const checkUrl = async (url: string) => {
    setIsLoading(true);
    setError(null);
    setResult(null);

    const validation = validateUrl(url);
    
    if (!validation.success) {
      setError(validation.error.flatten().formErrors[0] ?? validation.error.errors[0]?.message ?? "Invalid URL");
      setIsLoading(false);
      return;
    }

    try {
      const data = await checkLinkFn(url);
      setResult(data);
    } catch (err) {
      setError("Failed to check URL. Server might be busy.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return { checkUrl, result, error, isLoading, reset };
};