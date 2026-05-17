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
  const essentials = [
    "Water taxis run between West Bay and West End.",
    "Carry a little cash; pristine USD bills travel best.",
    "Reef-safe sunscreen protects both you and the coral.",
  ];

  return (
    <section className="bg-cream pb-6">
      <SectionBanner
        src={bannerImage}
        alt="The Caribbean coast of Roatán"
        eyebrow="Practical guide"
        title="The Island"
        subtitle="A softer way to find your bearings"
      />

      <div className="section-padding mx-auto max-w-lg">
        <div className="luxury-panel overflow-hidden">
          <div className="relative h-40">
            <ArcaImage
              src={inlineImage}
              alt="West Bay Beach, Roatán"
              sizes="(max-width: 512px) 100vw, 512px"
            />
            <div className="absolute inset-0 bg-section-overlay" />
            <p className="absolute bottom-4 left-4 max-w-[14rem] font-display text-2xl leading-tight text-cream">
              Roatán rewards an unhurried day.
            </p>
          </div>
          <div className="divide-y divide-sand/40">
            {essentials.map((item) => (
              <p
                key={item}
                className="px-4 py-3 font-body text-[13px] leading-snug text-charcoal-muted"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <GarifunaBorder className="my-3" />

        <div className="mt-4 space-y-3">
          {content.subsections.map((subsection, index) => (
            <details
              key={subsection.id}
              className="group rounded-[1.35rem] border border-sand/45 bg-linen-light/90 px-4 py-3 shadow-card open:bg-cream"
              open={index < 2}
            >
              <summary className="flex min-h-touch cursor-pointer list-none items-center justify-between gap-4">
                <span className="font-display text-xl text-ocean-dark">
                  {subsection.title}
                </span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-sand/60 font-heading text-sm text-terracotta transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <ul className="space-y-2 pb-2 pt-2">
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
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
