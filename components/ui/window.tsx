import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface WindowMockupProps {
  children: ReactNode;
  title?: string;
  className?: string;
  headerClassName?: string;
  bodyClassName?: string;
  actionButtons?: ReactNode;
}

export function WindowMockup({
  children,
  title = "window.internal",
  className,
  headerClassName,
  bodyClassName,
  actionButtons,
}: WindowMockupProps) {
  return (
    <div
      className={cn(
        "relative mx-auto w-full overflow-hidden rounded-2xl border-2 border-primary/15 bg-card shadow-xl shadow-primary/10",
        className
      )}
    >
      {/* Window Header / Title Bar */}
      <div
        className={cn(
          "flex items-center justify-between border-b border-primary/10 bg-primary/5 p-3.5",
          headerClassName
        )}
      >
        {/* macOS-style Window Control Dots */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Window Title */}
        {title && (
          <span className="truncate font-mono text-xs font-medium text-primary">
            {title}
          </span>
        )}

        {/* Optional Header Actions or Spacer to Keep Title Centered */}
        <div className="flex min-w-12 items-center justify-end">
          {actionButtons ?? null}
        </div>
      </div>

      {/* Window Content Body */}
      <div className={cn("p-8 bg-card", bodyClassName)}>
        {children}
      </div>
    </div>
  );
}