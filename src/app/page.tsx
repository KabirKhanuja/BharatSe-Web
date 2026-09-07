import { ActivityChart } from "@/components/dashboard/activity-chart";
import { ChannelSplit } from "@/components/dashboard/channel-split";
import { ClusterTable } from "@/components/dashboard/cluster-table";
import { IncomeChart } from "@/components/dashboard/income-chart";
import { KpiCard } from "@/components/dashboard/kpi-card";
import { PassportCard } from "@/components/dashboard/passport-card";
import { SchemeProgress } from "@/components/dashboard/scheme-progress";
import { Sidebar } from "@/components/shell/sidebar";
import { Topbar } from "@/components/shell/topbar";
import { kpis } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="flex min-h-full flex-1">
      <Sidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          title="Programme overview"
          subtitle="Artisan livelihoods through digital market linkage"
        />

        <main className="flex-1 space-y-5 p-5">
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {kpis.map((kpi) => (
              <KpiCard key={kpi.id} kpi={kpi} />
            ))}
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <IncomeChart />
            </div>
            <SchemeProgress />
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-3">
            <div className="xl:col-span-2">
              <ActivityChart />
            </div>
            <ChannelSplit />
          </section>

          <section className="grid grid-cols-1 gap-4 xl:grid-cols-4">
            <div className="xl:col-span-3">
              <ClusterTable />
            </div>
            <PassportCard />
          </section>

          <p className="pt-1 text-xs text-[var(--brand-ink-faint)]">
            Prototype interface. All figures shown are sample data and are not
            drawn from any live scheme record.
          </p>
        </main>
      </div>
    </div>
  );
}
