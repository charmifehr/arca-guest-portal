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
      className={`relative overflow-hidden ${tall ? "h-[44vh] min-h-[280px]" : "h-[30vh] min-h-[205px]"}`}
    >
      <ArcaImage
        src={src}
        alt={alt}
        priority
        sizes="100vw"
        className="scale-[1.02] object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(30,25,22,0.86),rgba(30,25,22,0.34),rgba(30,25,22,0.08))] grain-overlay" />
      <div className="absolute inset-x-0 bottom-0 flex flex-col justify-end p-5 pb-6 sm:p-6">
        {eyebrow ? <p className="heading-caps text-gold-light">{eyebrow}</p> : null}
        <h2 className="font-display text-4xl font-light leading-[0.98] tracking-wide text-cream sm:text-5xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-xs font-body text-sm italic leading-snug text-cream/90">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  );
}
