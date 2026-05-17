import type { WelcomeContent } from "@/lib/types";
import { formatRichText } from "@/lib/utils";
import { GarifunaBorder } from "../GarifunaBorder";
import { ArcaImage } from "../ui/ArcaImage";

interface WelcomeSectionProps {
  content: WelcomeContent;
  onExplore?: () => void;
}

export function WelcomeSection({ content, onExplore }: WelcomeSectionProps) {
  const paragraphs = content.message.split("\n\n").filter(Boolean);

  return (
    <section className="relative min-h-full bg-charcoal-deep">
      <div className="relative h-[68vh] min-h-[320px]">
        <ArcaImage
          src={content.backgroundImage}
          alt="Arca boutique hotel on West Bay Beach, Roatán"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-hero-overlay grain-overlay" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 pb-10">
          <p className="font-heading text-[10px] font-semibold uppercase tracking-caps text-gold-light">
            Arca, Roatán, Honduras
          </p>
          <h1 className="display-title mt-2 max-w-sm">
            Where barefoot luxury meets the Caribbean
          </h1>
          <p className="mt-3 max-w-xs font-body text-sm leading-relaxed text-cream/85">
            Your private guide to island living — crafted for your stay.
          </p>
        </div>
      </div>

      <div className="relative -mt-6 rounded-t-[2rem] bg-warm-gradient px-5 pb-10 pt-8 shadow-warm">
        <GarifunaBorder />
        <div className="space-y-3 font-body text-[15px] leading-relaxed text-charcoal">
          {paragraphs.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-display text-xl italic text-charcoal"
                  : "text-charcoal-muted"
              }
              dangerouslySetInnerHTML={{ __html: formatRichText(para) }}
            />
          ))}
        </div>
        {onExplore ? (
          <button
            type="button"
            onClick={onExplore}
            className="mt-7 flex min-h-touch w-full items-center justify-center gap-2 rounded-full bg-ocean px-6 font-heading text-xs font-medium uppercase tracking-wide text-cream shadow-card transition active:scale-[0.98]"
          >
            Begin exploring
            <span aria-hidden>→</span>
          </button>
        ) : null}
      </div>
    </section>
  );
}
