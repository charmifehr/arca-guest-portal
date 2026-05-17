import type { WeeklyEvent } from "@/lib/types";
import { TAB_IMAGES } from "@/lib/images";
import { GarifunaBorder } from "../GarifunaBorder";
import { SectionBanner } from "../ui/SectionBanner";

interface EventsSectionProps {
  events: WeeklyEvent[];
  bannerImage?: string;
}

export function EventsSection({
  events,
  bannerImage = TAB_IMAGES.events,
}: EventsSectionProps) {
  return (
    <section className="bg-cream pb-6">
      <SectionBanner
        src={bannerImage}
        alt="Evening at Arca — pool and island atmosphere"
        eyebrow="What's on"
        title="This Week at Arca"
        subtitle="Live music, yoga, happy hour & more"
      />

      <div className="section-padding mx-auto max-w-lg">
        <GarifunaBorder />

        {events.length === 0 ? (
          <p className="mt-4 text-center font-display text-lg italic text-charcoal-muted">
            Check back soon — something is always happening at Arca.
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {events.map((event) => (
              <li key={event.id}>
                <article className="card-warm overflow-hidden">
                  <div className="h-1 bg-gradient-to-r from-terracotta via-gold to-ocean-light" />
                  <div className="p-4">
                    <p className="heading-caps text-ocean">{event.name}</p>
                    <p className="mt-1.5 font-display text-lg text-charcoal">
                      {event.day}
                      {event.date ? `, ${event.date}` : ""}
                    </p>
                    <p className="font-heading text-xs font-medium text-terracotta">
                      {event.time}
                    </p>
                    <p className="mt-2 font-body text-sm leading-snug text-charcoal-muted">
                      {event.description}
                    </p>
                    {event.location ? (
                      <p className="mt-2 font-heading text-[10px] uppercase tracking-wide text-charcoal-muted">
                        {event.location}
                      </p>
                    ) : null}
                  </div>
                </article>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
