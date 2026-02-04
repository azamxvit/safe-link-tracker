import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckResult } from "../types";
import { StatusBadge } from "./StatusBadge";
import { Separator } from "@/components/ui/separator";
import { CalendarDays, ShieldAlert, CheckCircle } from "lucide-react";
import { format } from "date-fns";

export function ResultCard({ result }: { result: CheckResult }) {
  const isFreshDomain = result.domainAge && result.domainAge.days < 30;

  return (
    <Card className="w-full max-w-2xl mx-auto mt-8 border-0 shadow-2xl bg-card/80 backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4">
      <CardHeader className="text-center pb-2">
        <StatusBadge status={result.status} />
        <CardTitle className="mt-4 text-xl break-all text-muted-foreground font-normal">
          {result.url}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        
        {/* Score Bar */}
        <div className="bg-muted/50 p-4 rounded-lg border-0">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Trust Score</span>
            <span className={`font-bold text-lg ${result.score < 50 ? 'text-status-danger' : 'text-status-safe'}`}>
              {result.score}/100
            </span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-1000 ease-out ${
                result.status === 'safe' ? 'bg-status-safe' : 
                result.status === 'danger' ? 'bg-status-danger' : 'bg-status-warning'
              }`} 
              style={{ width: `${result.score}%` }}
            />
          </div>
        </div>

        {/* WHOIS Info */}
        {result.domainAge && (
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-lg border-0 flex flex-col items-center justify-center text-center gap-2 ${
              isFreshDomain ? 'bg-status-danger/10' : 'bg-status-safe/10'
            }`}>
              <CalendarDays className={`h-6 w-6 ${isFreshDomain ? 'text-status-danger' : 'text-status-safe'}`} />
              <div>
                <div className="text-sm text-muted-foreground">Domain Age</div>
                <div className="font-bold text-lg">{result.domainAge.days} days</div>
              </div>
            </div>

            <div className="p-4 rounded-lg border-0 bg-muted/50 flex flex-col items-center justify-center text-center gap-2">
               {result.status === 'safe' ? (
                 <CheckCircle className="h-6 w-6 text-status-safe" />
               ) : (
                 <ShieldAlert className="h-6 w-6 text-status-warning" />
               )}
               <div>
                <div className="text-sm text-muted-foreground">Registration</div>
                <div className="font-medium">
                  {result.domainAge?.createdDate && format(new Date(result.domainAge.createdDate), 'MMM d, yyyy')}
                </div>
               </div>
            </div>
          </div>
        )}

        {/* Reasons List */}
        {result.reasons.length > 0 && (
          <>
            <Separator className="opacity-50" />
            <div className="space-y-3">
              <h4 className="font-semibold flex items-center gap-2">
                Analysis Report
              </h4>
              <ul className="space-y-2">
                {result.reasons.map((reason, idx) => (
                  <li key={idx} className="flex gap-2 text-sm text-muted-foreground items-start">
                    <span className="text-status-danger mt-1">•</span>
                    {reason}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
}