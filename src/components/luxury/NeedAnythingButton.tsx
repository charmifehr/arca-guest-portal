import { WHATSAPP_CONCIERGE_URL } from "@/lib/constants";

export function NeedAnythingButton() {
  return (
    <a
      href={WHATSAPP_CONCIERGE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-[7.25rem] right-4 z-40 inline-flex min-h-touch items-center gap-2 rounded-full border border-cream/50 bg-cream/95 px-4 py-3 font-heading text-[11px] font-semibold uppercase tracking-wide text-charcoal-deep shadow-warm backdrop-blur-md transition duration-200 hover:bg-white active:scale-[0.97]"
    >
      <span className="h-2 w-2 rounded-full bg-[#25D366] shadow-[0_0_0_4px_rgba(37,211,102,0.12)]" />
      Need Anything?
    </a>
  );
}
