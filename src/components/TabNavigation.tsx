"use client";

import { PORTAL_TABS, type PortalTabId } from "@/lib/constants";

interface TabNavigationProps {
  activeTab: PortalTabId;
  onTabChange: (tab: PortalTabId) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <header className="shrink-0 border-b border-sand/40 bg-cream/90 shadow-sm backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-sand/30 bg-cream/70 px-4 py-2.5">
        <div>
          <p className="font-display text-2xl font-light leading-none tracking-wide text-charcoal">
            Arca
          </p>
          <p className="font-heading text-[8px] font-medium uppercase tracking-caps text-terracotta">
            Private guest portal
          </p>
        </div>
        <p className="rounded-full border border-sand/60 px-3 py-1 font-heading text-[8px] uppercase tracking-wide text-charcoal-muted">
          West Bay
        </p>
      </div>

      <nav
        className="scrollbar-hide flex overflow-x-auto overscroll-x-contain bg-linen-light/70"
        aria-label="Portal sections"
        role="tablist"
      >
        {PORTAL_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`panel-${tab.id}`}
              onClick={() => onTabChange(tab.id)}
              className={`relative min-h-touch shrink-0 whitespace-nowrap px-3.5 py-2.5 font-heading text-[10px] transition-all sm:px-4 sm:text-xs ${
                isActive
                  ? "bg-cream font-semibold text-ocean-dark"
                  : "text-charcoal-muted hover:bg-cream/50 hover:text-charcoal"
              }`}
            >
              {tab.label}
              {isActive ? (
                <span
                  className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-terracotta to-gold"
                  aria-hidden
                />
              ) : null}
            </button>
          );
        })}
      </nav>
    </header>
  );
}
