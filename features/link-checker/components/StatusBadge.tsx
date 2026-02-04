import { Badge } from "@/components/ui/badge";
import { ShieldCheck, ShieldAlert, TriangleAlert } from "lucide-react";
import { PhishingStatus } from "../types";
import { cn } from "@/lib/utils";

const STATUS_CONFIG = {
  safe: {
    label: "Likely Safe",
    icon: ShieldCheck,
    className: "bg-status-safe hover:bg-status-safe/90 text-white border-transparent",
  },
  suspicious: {
    label: "Suspicious",
    icon: TriangleAlert,
    className: "bg-status-warning hover:bg-status-warning/90 text-white border-transparent",
  },
  danger: {
    label: "Phishing Detected",
    icon: ShieldAlert,
    className: "bg-status-danger hover:bg-status-danger/90 text-white border-transparent",
  },
};

export function StatusBadge({ status }: { status: PhishingStatus }) {
  const config = STATUS_CONFIG[status];
  const Icon = config.icon;

  return (
    <Badge className={cn("px-4 py-1.5 text-base flex gap-2 items-center justify-center w-fit mx-auto", config.className)}>
      <Icon className="w-5 h-5" />
      {config.label}
    </Badge>
  );
}