/** Curated photography from arcaroatan.com — hotel, beach, dining, experiences */
const base = "https://arcaroatan.com/wp-content/uploads";

export const ARCA_IMAGES = {
  hero:
    `${base}/2024/10/Beachfront-Junior-Suite-King-Bed-Arca-Roatan-Boutique-Hotel-West-Bay.jpg`,
  beach:
    `${base}/2024/10/The-Destination-Arca-Boutique-Hotel-West-Bay-Roatan.jpg`,
  experiences:
    `${base}/2024/10/Tailored-Experiences-Arca-Boutique-Hotel-West-Bay-Roatan.jpg`,
  dining: `${base}/2025/04/food-2-scaled.jpg`,
  pool: `${base}/2018/11/bg-10-free-img-1.jpg`,
  suite: `${base}/2024/10/Beachfront-Junior-Suite-King-Bed-Arca-Roatan-Boutique-Hotel-West-Bay.jpg`,
} as const;

/** Default excursion imagery — replace via admin when you have partner-specific photos */
export const PARTNER_IMAGES: Record<string, string> = {
  "west-bay-divers": ARCA_IMAGES.beach,
  "anthonys-key": ARCA_IMAGES.experiences,
  "wahoo-slayer": ARCA_IMAGES.beach,
  "ruthless-charters": ARCA_IMAGES.beach,
  "mangrove-tours": ARCA_IMAGES.experiences,
  "gumbalimba": ARCA_IMAGES.experiences,
  "chocolate-factory": ARCA_IMAGES.dining,
  "kao-kamasa": ARCA_IMAGES.pool,
  "spa-baan-suerte": ARCA_IMAGES.pool,
  sundowners: ARCA_IMAGES.beach,
  "roatan-brewing": ARCA_IMAGES.dining,
};

export const TAB_IMAGES = {
  landing: ARCA_IMAGES.hero,
  dining: ARCA_IMAGES.dining,
  events: ARCA_IMAGES.pool,
  island: ARCA_IMAGES.beach,
  tours: ARCA_IMAGES.experiences,
} as const;
