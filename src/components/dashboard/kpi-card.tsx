import { ArrowDownRight, ArrowUpRight, Minus } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import type { Kpi } from "@/lib/data";
import { cn } from "@/lib/utils";

export function KpiCard({ kpi }: { kpi: Kpi }) {
  const Icon =
    kpi.trend === "up"
      ? ArrowUpRight
      : kpi.trend === "down"
        ? ArrowDownRight
        : Minus;

  const tone =
    kpi.trend === "up"
      ? "text-[var(--brand-success)]"
      : kpi.trend === "down"
        ? "text-destructive"
        : "text-muted-foreground";

  return (
    <Card className="gap-0 py-5">
      <CardContent className="px-5">
        <p className="text-xs font-medium text-muted-foreground">{kpi.label}</p>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="tabular text-2xl font-semibold tracking-tight">
            {kpi.value}
          </span>
          <span
            className={cn("flex items-center gap-0.5 text-xs font-medium", tone)}
          >
            <Icon className="size-3.5" />
            {kpi.change}%
          </span>
        </div>

        <p className="mt-2 text-xs text-muted-foreground">{kpi.note}</p>
      </CardContent>
    </Card>
  );
}
