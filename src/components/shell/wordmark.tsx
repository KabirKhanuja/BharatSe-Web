import { cn } from "@/lib/utils";

/**
 * The BharatSe wordmark, with the terracotta dot that sits above the final
 * letter. Set in Plex rather than the app's display serif, because this
 * surface is an instrument panel and not a storefront.
 */
export function Wordmark({
  className,
  showTagline = false,
}: {
  className?: string;
  showTagline?: boolean;
}) {
  return (
    <div className={cn("flex flex-col", className)}>
      <span className="relative inline-flex items-start text-[19px] font-semibold leading-none tracking-tight text-[var(--brand-navy)]">
        BharatSe
        <span
          aria-hidden
          className="absolute right-[1px] top-[-4px] size-[5px] rounded-full bg-[var(--brand-terracotta)]"
        />
      </span>
      {showTagline ? (
        <span className="mt-1 text-[11px] leading-none text-[var(--brand-terracotta)]">
          From the people of Bharat, for Bharat
        </span>
      ) : null}
    </div>
  );
}
