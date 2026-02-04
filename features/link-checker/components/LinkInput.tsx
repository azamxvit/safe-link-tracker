import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Loader2 } from "lucide-react";

interface LinkInputProps {
  onCheck: (url: string) => void;
  isLoading: boolean;
}

export function LinkInput({ onCheck, isLoading }: LinkInputProps) {
  const [url, setUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) onCheck(url);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input 
          placeholder="Paste a link to check" 
          className="pl-10 h-12 text-lg shadow-sm"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          disabled={isLoading}
        />
      </div>
      <Button type="submit" size="lg" className="h-12 px-8 font-semibold" disabled={isLoading}>
        {isLoading ? <Loader2 className="animate-spin" /> : "Scan Link"}
      </Button>
    </form>
  );
}