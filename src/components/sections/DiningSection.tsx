"use client";

import { useMemo, useState } from "react";
import type { DiningContent, MenuSection } from "@/lib/types";
import { TAB_IMAGES } from "@/lib/images";
import { GarifunaBorder } from "../GarifunaBorder";
import { WhatsAppButton } from "../WhatsAppButton";
import { SectionBanner } from "../ui/SectionBanner";

interface DiningSectionProps {
  content: DiningContent;
  bannerImage?: string;
}

type DiningTabId = "breakfast" | "lunch" | "dinner" | "drinks" | "wines";

const DINING_TABS: { id: DiningTabId; label: string }[] = [
  { id: "breakfast", label: "Breakfast" },
  { id: "lunch", label: "Lunch" },
  { id: "dinner", label: "Dinner" },
  { id: "drinks", label: "Drinks" },
  { id: "wines", label: "Arca Select Wines" },
];

function getSectionsForTab(
  content: DiningContent,
  activeTab: DiningTabId,
): { title: string; sections: MenuSection[] } {
  const breakfast = content.categories.find((cat) => cat.id === "breakfast");
  const lunchDinner = content.categories.find(
    (cat) => cat.id === "lunch-dinner",
  );
  const drinks = content.categories.find((cat) => cat.id === "drinks");

  if (activeTab === "breakfast") {
    return { title: "Breakfast", sections: breakfast?.sections ?? [] };
  }

  if (activeTab === "lunch") {
    return { title: "Lunch", sections: lunchDinner?.sections ?? [] };
  }

  if (activeTab === "dinner") {
    return { title: "Dinner", sections: lunchDinner?.sections ?? [] };
  }

  if (activeTab === "wines") {
    return {
      title: "Arca Select Wines",
      sections:
        drinks?.sections.filter((section) =>
          section.id.includes("select-wines"),
        ) ?? [],
    };
  }

  return {
    title: "Drinks",
    sections:
      drinks?.sections.filter(
        (section) => !section.id.includes("select-wines"),
      ) ?? [],
  };
}

export function DiningSection({
  content,
  bannerImage = TAB_IMAGES.dining,
}: DiningSectionProps) {
  const [activeMenuTab, setActiveMenuTab] =
    useState<DiningTabId>("breakfast");

  const activeMenu = useMemo(
    () => getSectionsForTab(content, activeMenuTab),
    [content, activeMenuTab],
  );

  return (
    <section className="bg-cream pb-6">
      <SectionBanner
        src={bannerImage}
        alt="Ahari restaurant — Caribbean fusion at Arca"
        eyebrow="In-room dining"
        title="Ahari"
        subtitle="Island flavors, sent quietly to your room"
      />

      <div className="section-padding mx-auto max-w-lg">
        <div className="luxury-panel overflow-hidden">
          <div className="border-b border-sand/40 px-4 py-4">
            <p className="font-heading text-[10px] font-semibold uppercase tracking-caps text-terracotta">
              From Ahari
            </p>
            <p className="mt-2 font-display text-2xl leading-tight text-charcoal">
              Choose what sounds good. We will take care of the rest.
            </p>
          </div>
          <div className="grid grid-cols-2 divide-x divide-sand/40">
            <div className="px-4 py-3">
              <p className="font-heading text-[9px] uppercase tracking-wide text-charcoal-muted">
                Breakfast
              </p>
              <p className="font-body text-xs italic text-charcoal">
                {content.hours.breakfast}
              </p>
            </div>
            <div className="px-4 py-3">
              <p className="font-heading text-[9px] uppercase tracking-wide text-charcoal-muted">
                Lunch & Dinner
              </p>
              <p className="font-body text-xs italic text-charcoal">
                {content.hours.lunchDinner}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[6.5rem_1fr] gap-3">
          <aside
            className="sticky top-4 self-start"
            aria-label="Dining menu sections"
          >
            <div className="luxury-panel overflow-hidden p-1.5">
              {DINING_TABS.map((tab) => {
                const isActive = activeMenuTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveMenuTab(tab.id)}
                    className={`min-h-touch w-full rounded-[1rem] px-2 py-2 text-left font-heading text-[9px] uppercase leading-tight tracking-wide transition ${
                      isActive
                        ? "bg-ocean text-cream shadow-card"
                        : "text-charcoal-muted hover:bg-sand/20 hover:text-charcoal"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </aside>

          <div className="min-w-0">
            <p className="font-heading text-[9px] uppercase tracking-caps text-terracotta">
              Menu
            </p>
            <h3 className="font-display text-xl text-ocean-dark">
              {activeMenu.title}
            </h3>
            <div className="mt-1.5 h-px w-12 bg-gradient-to-r from-terracotta to-transparent" />

            {activeMenu.sections.length === 0 ? (
              <p className="mt-4 rounded-2xl border border-sand/50 bg-linen-light/80 p-4 font-body text-sm italic text-charcoal-muted">
                This menu section is being updated.
              </p>
            ) : (
              activeMenu.sections.map((section) => (
                <div key={section.id} className="mt-4">
                  <h4 className="heading-caps mb-1 text-charcoal">
                    {section.title}
                  </h4>
                  <ul className="card-warm divide-y divide-sand/50 px-3 py-1.5">
                    {section.items.map((menuItem) => (
                      <li key={menuItem.id} className="menu-row">
                        <article
                          className={
                            menuItem.unavailable ? "opacity-45" : undefined
                          }
                        >
                          <div className="flex items-start justify-between gap-2">
                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                                <h5 className="font-heading text-[12px] font-semibold leading-snug text-charcoal">
                                  {menuItem.name}
                                </h5>
                                {menuItem.unavailable ? (
                                  <span className="font-heading text-[9px] uppercase tracking-wide text-terracotta">
                                    Unavailable
                                  </span>
                                ) : null}
                              </div>
                              {menuItem.description ? (
                                <p className="mt-0.5 line-clamp-2 font-body text-[10.5px] leading-snug text-charcoal-muted">
                                  {menuItem.description}
                                </p>
                              ) : null}
                            </div>
                            <p className="shrink-0 font-heading text-[12px] font-semibold tabular-nums text-terracotta">
                              $
                              {Number.isInteger(menuItem.price)
                                ? menuItem.price
                                : menuItem.price.toFixed(2)}
                            </p>
                          </div>
                        </article>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-gold/30 bg-gold/10 px-4 py-3">
          <p className="font-heading text-[9px] uppercase tracking-caps text-terracotta">
            Concierge note
          </p>
          <p className="mt-1 font-body text-xs italic leading-relaxed text-charcoal-muted">
            If you are unsure what to choose, ask us what is freshest today. The
            best meals here often begin with the catch and the weather.
          </p>
        </div>

        <p className="mt-5 text-center font-body text-[10px] italic text-charcoal-muted">
          Taxes and gratuity not included · USD
        </p>

        <div className="mt-5">
          <WhatsAppButton />
        </div>
      </div>
    </section>
  );
}
