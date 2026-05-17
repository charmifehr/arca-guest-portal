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
        subtitle="Hand-picked partners we trust"
        tall
      />

      <div className="section-padding mx-auto max-w-lg">
        <p className="rounded-xl border border-gold/30 bg-gold/10 px-4 py-3 font-body text-[13px] leading-snug text-charcoal">
          {content.snorkelingNote}
        </p>
        <GarifunaBorder />

        <ul className="mt-4 space-y-4">
          {content.partners.map((partner) => {
            const imageSrc =
              partner.imageUrl ??
              PARTNER_IMAGES[partner.id] ??
              TAB_IMAGES.tours;

            return (
              <li key={partner.id}>
                <article className="card-warm overflow-hidden">
                  <div className="relative h-40">
                    <ArcaImage
                      src={imageSrc}
                      alt={`${partner.name} — ${partner.category}`}
                      sizes="(max-width: 512px) 100vw, 512px"
                    />
                    <div className="absolute inset-0 bg-section-overlay" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-charcoal-deep/80 px-3 py-1 font-heading text-[9px] uppercase tracking-wide text-cream backdrop-blur-sm">
                      {partner.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-xl text-charcoal">
                      {partner.name}
                    </h3>
                    <p className="mt-2 font-body text-[13px] leading-snug text-charcoal-muted">
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
                    <p className="mt-3 font-heading text-[10px] uppercase tracking-wide text-ocean">
                      {partner.bookingNote}
                    </p>
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
