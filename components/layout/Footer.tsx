import { Shield } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const teamMembers = [
  "Berik Nursultan",
  "Yskakova Bakyt",
  "Zhaksylyk Bektas",
  "Omirtay Azamat",
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background/60 backdrop-blur-md py-8 mt-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2 font-bold text-lg">
              <Shield className="w-6 h-6 text-primary fill-primary/10" />
              <span>Team <span className="text-primary">Prompt</span></span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              Building safer web experiences.
            </p>
          </div>

          {/* Разделитель для мобилок */}
          <Separator className="md:hidden w-24" />

          {/*Участники */}
          <div className="flex flex-col items-center md:items-end gap-2">
             <h4 className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
              Engineering Team
            </h4>
            <ul className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-1 text-sm font-medium">
              {teamMembers.map((member, index) => (
                <li key={index} className="hover:text-primary transition-colors">
                  {member}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6" />
        <div className="text-center text-xs text-muted-foreground">
          © {currentYear} SafeLink Tracker. Developed by Team Prompt. All rights reserved.
        </div>
      </div>
    </footer>
  );
}