"use client";

import { PORTAL_TABS, type PortalTabId } from "@/lib/constants";

interface TabNavigationProps {
  activeTab: PortalTabId;
  onTabChange: (tab: PortalTabId) => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <header className="shrink-0 border-b border-sand/60 bg-cream/95 shadow-sm backdrop-blur-md">
      <div className="border-b border-sand/40 bg-warm-gradient px-4 py-3">
        <p className="font-display text-xl font-light tracking-wide text-charcoal">
          Arca
        </p>
        <p className="font-heading text-[10px] font-medium uppercase tracking-caps text-terracotta">
          Roatán, Honduras
        </p>
      </div>

      <nav
        className="scrollbar-hide flex overflow-x-auto overscroll-x-contain bg-linen-light/80"
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
              className={`relative min-h-touch shrink-0 whitespace-nowrap px-3.5 py-3 font-heading text-[11px] transition-all sm:px-4 sm:text-xs ${
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
