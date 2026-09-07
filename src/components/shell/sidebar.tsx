"use client";

import {
  BarChart3,
  Boxes,
  FileBadge2,
  LayoutDashboard,
  MapPinned,
  Settings,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Wordmark } from "@/components/shell/wordmark";
import { cn } from "@/lib/utils";

/**
 * `ready` marks the sections that actually exist. Unbuilt ones render as
 * inert rather than as links, because a nav item that 404s in front of a
 * reviewer is worse than one that is visibly not finished yet.
 */
const nav = [
  { href: "/", label: "Overview", icon: LayoutDashboard, ready: true },
  { href: "/beneficiaries", label: "Beneficiaries", icon: Users, ready: false },
  { href: "/clusters", label: "Clusters", icon: MapPinned, ready: false },
  { href: "/catalogue", label: "Catalogue", icon: Boxes, ready: false },
  { href: "/passports", label: "Craft Passports", icon: FileBadge2, ready: false },
  { href: "/reports", label: "Reports", icon: BarChart3, ready: false },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-60 shrink-0 flex-col border-r bg-sidebar lg:flex">
      <div className="flex h-16 items-center border-b px-5">
        <Wordmark showTagline />
      </div>

      <nav className="flex-1 space-y-1 p-3">
        {nav.map((item) => {
          const active = pathname === item.href;
          const className = cn(
            "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
            active
              ? "bg-sidebar-accent font-medium text-sidebar-accent-foreground"
              : item.ready
                ? "text-muted-foreground hover:bg-secondary hover:text-foreground"
                : "cursor-default text-[var(--brand-ink-faint)]",
          );

          if (!item.ready) {
            return (
              <div key={item.href} className={className} aria-disabled>
                <item.icon className="size-4" />
                <span className="flex-1">{item.label}</span>
                <span className="rounded-full border px-1.5 py-px text-[10px] leading-tight">
                  Planned
                </span>
              </div>
            );
          }

          return (
            <Link key={item.href} href={item.href} className={className}>
              <item.icon className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="border-t p-3">
        <div className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-[var(--brand-ink-faint)]">
          <Settings className="size-4" />
          Settings
        </div>
        <p className="px-3 pt-3 text-[11px] leading-relaxed text-[var(--brand-ink-faint)]">
          Ministry of Social Justice and Empowerment
        </p>
      </div>
    </aside>
  );
}
