"use client";

import type { PortalTabId } from "@/lib/constants";

interface QuickActionsBarProps {
  activeTab: PortalTabId;
  onNavigate: (tab: PortalTabId) => void;
}

const QUICK_ACTIONS: {
  id: Exclude<PortalTabId, "landing">;
  label: string;
  short: string;
}[] = [
  { id: "dining", label: "In-Room Dining", short: "Dining" },
  { id: "events", label: "This Week at Arca", short: "This Week" },
  { id: "island", label: "The Island", short: "Island" },
  { id: "tours", label: "Tours & Excursions", short: "Tours" },
];

export function QuickActionsBar({
  activeTab,
  onNavigate,
}: QuickActionsBarProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 px-3 pb-[calc(env(safe-area-inset-bottom)+0.75rem)]">
      <div className="pointer-events-auto mx-auto max-w-lg rounded-[1.75rem] border border-cream/45 bg-charcoal-deep/80 p-2 shadow-[0_18px_60px_rgba(42,37,34,0.35)] backdrop-blur-xl">
        <p className="px-3 pb-1 pt-1 font-heading text-[9px] uppercase tracking-caps text-gold-light">
          What would you like?
        </p>
        <div className="grid grid-cols-4 gap-1.5">
          {QUICK_ACTIONS.map((action) => {
            const isActive = activeTab === action.id;
            return (
              <button
                key={action.id}
                type="button"
                onClick={() => onNavigate(action.id)}
                className={`min-h-[58px] rounded-2xl px-1.5 py-2 text-center transition duration-200 active:scale-[0.97] ${
                  isActive
                    ? "bg-cream text-charcoal shadow-glow"
                    : "bg-cream/8 text-cream hover:bg-cream/15"
                }`}
                aria-label={action.label}
              >
                <span className="block font-heading text-[10px] font-semibold uppercase leading-tight tracking-wide">
                  {action.short}
                </span>
                <span
                  className={`mt-1 block h-px w-5 rounded-full mx-auto ${
                    isActive ? "bg-terracotta" : "bg-gold/40"
                  }`}
                  aria-hidden
                />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
