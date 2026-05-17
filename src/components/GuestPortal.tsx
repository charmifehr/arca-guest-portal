"use client";

import type { PortalContent } from "@/lib/types";
import type { PortalTabId } from "@/lib/constants";
import { useCallback, useEffect, useRef, useState } from "react";
import { TabNavigation } from "./TabNavigation";
import { OfflineBanner } from "./OfflineBanner";
import { Footer } from "./Footer";
import { NeedAnythingButton } from "./luxury/NeedAnythingButton";
import { QuickActionsBar } from "./luxury/QuickActionsBar";
import { WelcomeSection } from "./sections/WelcomeSection";
import { DiningSection } from "./sections/DiningSection";
import { EventsSection } from "./sections/EventsSection";
import { IslandSection } from "./sections/IslandSection";
import { ToursSection } from "./sections/ToursSection";

interface GuestPortalProps {
  content: PortalContent;
}

export function GuestPortal({ content }: GuestPortalProps) {
  const [activeTab, setActiveTab] = useState<PortalTabId>("landing");
  const panelRef = useRef<HTMLDivElement>(null);

  const handleTabChange = useCallback((tab: PortalTabId) => {
    setActiveTab(tab);
  }, []);

  useEffect(() => {
    panelRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [activeTab]);

  return (
    <div className="flex h-[100dvh] flex-col overflow-hidden bg-cream">
      <OfflineBanner />
      <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="relative flex-1 overflow-hidden">
        <div
          ref={panelRef}
          key={activeTab}
          id={`panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          className="tab-panel-enter h-full overflow-y-auto overscroll-contain bg-cream pb-36"
        >
          {activeTab === "landing" && (
            <WelcomeSection
              content={content.welcome}
              onNavigate={handleTabChange}
            />
          )}
          {activeTab === "dining" && (
            <DiningSection
              content={content.dining}
              bannerImage={content.media?.diningBanner}
            />
          )}
          {activeTab === "events" && (
            <EventsSection
              events={content.events}
              bannerImage={content.media?.eventsBanner}
            />
          )}
          {activeTab === "island" && (
            <IslandSection
              content={content.island}
              bannerImage={content.media?.islandBanner}
              inlineImage={content.media?.islandInline}
            />
          )}
          {activeTab === "tours" && (
            <ToursSection
              content={content.tours}
              bannerImage={content.media?.toursBanner}
            />
          )}
          <Footer />
        </div>
      </main>

      <NeedAnythingButton />
      <QuickActionsBar activeTab={activeTab} onNavigate={handleTabChange} />
    </div>
  );
}
