import type { IslandContent } from "@/lib/types";
import { ARCA_IMAGES, TAB_IMAGES } from "@/lib/images";
import { GarifunaBorder } from "../GarifunaBorder";
import { SectionBanner } from "../ui/SectionBanner";
import { ArcaImage } from "../ui/ArcaImage";

interface IslandSectionProps {
  content: IslandContent;
  bannerImage?: string;
  inlineImage?: string;
}

export function IslandSection({
  content,
  bannerImage = TAB_IMAGES.island,
  inlineImage = ARCA_IMAGES.beach,
}: IslandSectionProps) {
  return (
    <section className="bg-cream pb-6">
      <SectionBanner
        src={bannerImage}
        alt="The Caribbean coast of Roatán"
        eyebrow="Practical guide"
        title="The Island"
        subtitle="Navigate Roatán like a local"
      />

      <div className="section-padding mx-auto max-w-lg">
        <GarifunaBorder />

        <div className="mt-4 space-y-6">
          {content.subsections.map((subsection, index) => (
            <div key={subsection.id}>
              {index === 2 ? (
                <div className="relative mb-4 h-36 overflow-hidden rounded-2xl shadow-card">
                  <ArcaImage
                    src={inlineImage}
                    alt="West Bay Beach, Roatán"
                    sizes="(max-width: 512px) 100vw, 512px"
                  />
                  <div className="absolute inset-0 bg-section-overlay" />
                </div>
              ) : null}
              <h3 className="font-display text-xl text-ocean-dark">
                {subsection.title}
              </h3>
              <ul className="mt-2 space-y-2">
                {subsection.items.map((item, itemIndex) => (
                  <li
                    key={`${subsection.id}-${itemIndex}`}
                    className="flex gap-2.5 font-body text-[13px] leading-snug text-charcoal"
                  >
                    <span
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-terracotta"
                      aria-hidden
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
