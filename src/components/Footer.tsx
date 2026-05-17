import {
  EMAIL,
  MAIN_WEBSITE,
  WHATSAPP_DISPLAY,
  WHATSAPP_ORDER_URL,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative mt-8 overflow-hidden bg-charcoal-deep px-6 py-10 text-cream">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-dark/40 to-transparent" />
      <div className="relative mx-auto max-w-lg text-center">
        <p className="font-display text-2xl font-light text-cream">
          Arca
        </p>
        <p className="mt-1 font-heading text-[10px] uppercase tracking-caps text-gold-light">
          Roatán, Honduras
        </p>
        <div className="my-6 h-px w-16 mx-auto bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
        <div className="flex flex-col gap-3 font-body text-sm">
          <a
            href={WHATSAPP_ORDER_URL}
            className="min-h-touch inline-flex items-center justify-center text-cream/90 hover:text-cream"
          >
            WhatsApp & SMS · {WHATSAPP_DISPLAY}
          </a>
          <a
            href={`mailto:${EMAIL}`}
            className="min-h-touch inline-flex items-center justify-center text-cream/90 hover:text-cream"
          >
            {EMAIL}
          </a>
          <a
            href={MAIN_WEBSITE}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-touch inline-flex items-center justify-center text-cream/90 hover:text-cream"
          >
            www.arcaroatan.com
          </a>
        </div>
        <p className="mt-8 font-body text-[10px] text-cream/50">
          © {new Date().getFullYear()} Arca. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
