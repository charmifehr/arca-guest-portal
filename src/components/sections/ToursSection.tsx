import type { ToursContent } from "@/lib/types";
import { PARTNER_IMAGES, TAB_IMAGES } from "@/lib/images";
import { GarifunaBorder } from "../GarifunaBorder";
import { SectionBanner } from "../ui/SectionBanner";
import { ArcaImage } from "../ui/ArcaImage";

interface ToursSectionProps {
  content: ToursContent;
  bannerImage?: string;
}

export function ToursSection({
  content,
  bannerImage = TAB_IMAGES.tours,
}: ToursSectionProps) {
  return (
    <section className="bg-cream pb-6">
      <SectionBanner
        src={bannerImage}
        alt="Curated experiences around Roatán"
        eyebrow="Explore Roatán"
        title="Tours & Excursions"
        subtitle="Hand-picked, never generic"
        tall
      />

      <div className="section-padding mx-auto max-w-lg">
        <div className="luxury-panel px-5 py-5">
          <p className="heading-caps">Curated by Arca</p>
          <p className="mt-2 font-display text-2xl leading-tight text-charcoal">
            Tell us what kind of day you want. We will shape it.
          </p>
          <p className="mt-2 font-body text-sm leading-relaxed text-charcoal-muted">
            Reef mornings, jungle afternoons, quiet wellness rituals, or a boat
            day with salt still in your hair — these are the partners we trust.
          </p>
        </div>

        <div className="mt-4 rounded-[1.4rem] border border-gold/30 bg-gold/10 px-4 py-3">
          <p className="font-heading text-[9px] uppercase tracking-caps text-terracotta">
            Snorkeling from Arca
          </p>
          <p className="mt-1 font-body text-[13px] leading-snug text-charcoal">
            {content.snorkelingNote}
          </p>
        </div>

        <GarifunaBorder className="my-3" />

        <ul className="mt-4 space-y-4">
          {content.partners.map((partner) => {
            const imageSrc =
              partner.imageUrl ??
              PARTNER_IMAGES[partner.id] ??
              TAB_IMAGES.tours;

            return (
              <li key={partner.id}>
                <article className="card-warm tap-lift overflow-hidden">
                  <div className="relative h-48">
                    <ArcaImage
                      src={imageSrc}
                      alt={`${partner.name} — ${partner.category}`}
                      sizes="(max-width: 512px) 100vw, 512px"
                    />
                    <div className="absolute inset-0 bg-section-overlay" />
                    <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 font-heading text-[9px] uppercase tracking-wide text-ocean-dark backdrop-blur-sm">
                      {partner.category}
                    </span>
                    <p className="absolute bottom-4 left-4 right-4 font-display text-2xl leading-tight text-cream">
                      {partner.name}
                    </p>
                  </div>
                  <div className="p-4 pt-3">
                    <p className="font-body text-[13px] leading-snug text-charcoal-muted">
                      {partner.description}
                    </p>
                    <p className="mt-1.5 font-body text-xs text-charcoal-muted/90">
                      {partner.details}
                    </p>
                    {partner.recommendation ? (
                      <p className="mt-2 border-l-2 border-terracotta/50 pl-3 font-body text-xs italic text-terracotta-dark">
                        {partner.recommendation}
                      </p>
                    ) : null}
                    <div className="mt-3 flex items-center justify-between gap-3">
                      <p className="font-heading text-[10px] uppercase tracking-wide text-ocean">
                        {partner.bookingNote}
                      </p>
                      <span className="shrink-0 font-heading text-xs text-terracotta">
                        Arrange →
                      </span>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
