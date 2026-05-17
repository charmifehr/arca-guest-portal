import type { WelcomeContent } from "@/lib/types";
import type { PortalTabId } from "@/lib/constants";
import { formatRichText } from "@/lib/utils";
import { GarifunaBorder } from "../GarifunaBorder";
import { ConciergeStatus } from "../luxury/ConciergeStatus";
import { ArcaImage } from "../ui/ArcaImage";

interface WelcomeSectionProps {
  content: WelcomeContent;
  onNavigate?: (tab: PortalTabId) => void;
}

const guestNotes = [
  {
    label: "Wi-Fi",
    value: "Complimentary throughout the property",
    detail: "Password available from reception",
  },
  {
    label: "Concierge",
    value: "We are close by",
    detail: "Tap Need Anything? whenever you need us",
  },
  {
    label: "Pace",
    value: "Slow island days",
    detail: "Dining, reef time, and quiet corners are all here",
  },
];

export function WelcomeSection({ content, onNavigate }: WelcomeSectionProps) {
  const paragraphs = content.message.split("\n\n").filter(Boolean);

  return (
    <section className="relative min-h-full bg-charcoal-deep">
      <div className="relative h-[76vh] min-h-[520px] overflow-hidden">
        <ArcaImage
          src={content.backgroundImage}
          alt="Arca boutique hotel on West Bay Beach, Roatán"
          priority
          sizes="100vw"
          className="scale-[1.03] object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(20,18,16,0.96)_0%,rgba(20,18,16,0.66)_42%,rgba(20,18,16,0.16)_100%)] grain-overlay" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal-deep/50 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-between p-5 pb-8">
          <ConciergeStatus className="pt-2" />

          <div>
            <p className="font-heading text-[10px] font-semibold uppercase tracking-caps text-gold-light">
              Arca, Roatán, Honduras
            </p>
            <h1 className="mt-3 max-w-sm font-display text-[3.5rem] font-light leading-[0.92] tracking-wide text-cream sm:text-6xl">
              Welcome home by the sea.
            </h1>
            <p className="mt-5 max-w-[17rem] font-body text-[15px] leading-relaxed text-cream/90">
              Settle in. The water is warm, the reef is close, and everything you need is a tap away.
            </p>
          </div>
        </div>
      </div>

      <div className="relative -mt-12 rounded-t-[2.25rem] bg-warm-gradient px-5 pb-8 pt-8 shadow-warm">
        <div className="mx-auto max-w-lg">
          <GarifunaBorder />
          <p
            className="font-display text-2xl italic leading-tight text-charcoal"
            dangerouslySetInnerHTML={{
              __html: formatRichText(paragraphs[0] ?? "Welcome to Arca."),
            }}
          />
          <p className="mt-3 font-body text-sm leading-relaxed text-charcoal-muted">
            This is your private companion for the days ahead — dining, island notes,
            happenings, and experiences chosen with care.
          </p>

          <div className="mt-6 grid gap-3">
            {guestNotes.map((note) => (
              <div
                key={note.label}
                className="rounded-2xl border border-sand/50 bg-cream/70 px-4 py-3 shadow-card"
              >
                <p className="font-heading text-[9px] font-semibold uppercase tracking-caps text-terracotta">
                  {note.label}
                </p>
                <p className="mt-1 font-heading text-sm font-medium text-charcoal">
                  {note.value}
                </p>
                <p className="font-body text-xs italic text-charcoal-muted">
                  {note.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => onNavigate?.("dining")}
              className="min-h-touch rounded-full bg-ocean px-5 font-heading text-[11px] font-semibold uppercase tracking-wide text-cream shadow-card transition duration-200 active:scale-[0.98]"
            >
              Order dining
            </button>
            <button
              type="button"
              onClick={() => onNavigate?.("tours")}
              className="min-h-touch rounded-full border border-ocean/30 bg-cream px-5 font-heading text-[11px] font-semibold uppercase tracking-wide text-ocean-dark shadow-card transition duration-200 active:scale-[0.98]"
            >
              Explore island
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
