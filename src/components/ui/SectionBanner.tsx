import { ArcaImage } from "./ArcaImage";

interface SectionBannerProps {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  tall?: boolean;
}

export function SectionBanner({
  src,
  alt,
  title,
  subtitle,
  eyebrow,
  tall = false,
}: SectionBannerProps) {
  return (
    <div
      className={`relative overflow-hidden ${tall ? "h-[42vh] min-h-[240px]" : "h-[28vh] min-h-[180px]"}`}
    >
      <ArcaImage src={src} alt={alt} priority sizes="100vw" />
      <div className="absolute inset-0 bg-hero-overlay grain-overlay" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-6">
        {eyebrow ? <p className="heading-caps text-gold-light">{eyebrow}</p> : null}
        <h2 className="display-title text-balance">{title}</h2>
        {subtitle ? (
          <p className="mt-1 font-body text-sm italic text-cream/90">{subtitle}</p>
        ) : null}
      </div>
    </div>
  );
}
