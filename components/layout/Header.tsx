import { Shield } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export function Header() {
  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 md:px-8">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Shield className="w-8 h-8 text-primary fill-primary/20" />
          <span>SafeLink<span className="text-primary">Tracker</span></span>
        </div>
        <ModeToggle className="ml-auto" />
      </div>
    </header>
  );
}