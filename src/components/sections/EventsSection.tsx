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
        subtitle="A few lovely reasons to linger"
      />

      <div className="section-padding mx-auto max-w-lg">
        <div className="luxury-panel px-5 py-5">
          <p className="heading-caps">A note from us</p>
          <p className="mt-2 font-display text-2xl leading-tight text-charcoal">
            Evenings here are best left a little open.
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-charcoal-muted">
            Come as you are. Bare feet are welcome, reservations are thoughtful,
            and sunset usually sets the pace.
          </p>
        </div>

        <GarifunaBorder className="my-2" />

        {events.length === 0 ? (
          <p className="mt-4 rounded-[1.5rem] bg-linen-light/80 p-5 text-center font-display text-xl italic text-charcoal-muted shadow-card">
            Check back soon — something is always happening at Arca.
          </p>
        ) : (
          <ul className="mt-4 space-y-4">
            {events.map((event, index) => (
              <li key={event.id}>
                <article className="group grid grid-cols-[3.5rem_1fr] gap-3 rounded-[1.6rem] border border-sand/45 bg-linen-light/90 p-3 shadow-card transition duration-200 active:scale-[0.99]">
                  <div className="flex flex-col items-center justify-center rounded-[1.25rem] bg-charcoal-deep px-2 py-3 text-center text-cream">
                    <span className="font-heading text-[9px] uppercase tracking-wide text-gold-light">
                      {event.day.slice(0, 3)}
                    </span>
                    <span className="mt-1 font-display text-2xl leading-none">
                      {event.date?.replace(/[^0-9]/g, "") || index + 1}
                    </span>
                  </div>
                  <div className="py-1 pr-1">
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-display text-xl leading-tight text-charcoal">
                        {event.name}
                      </p>
                      <span className="shrink-0 rounded-full bg-terracotta/10 px-2 py-1 font-heading text-[9px] uppercase tracking-wide text-terracotta">
                        {event.time}
                      </span>
                    </div>
                    <p className="mt-2 font-body text-[13px] leading-snug text-charcoal-muted">
                      {event.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      {event.location ? (
                        <p className="font-heading text-[9px] uppercase tracking-wide text-ocean">
                          {event.location}
                        </p>
                      ) : <span />}
                      <p className="font-body text-[11px] italic text-charcoal-muted">
                        We can help reserve.
                      </p>
                    </div>
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
