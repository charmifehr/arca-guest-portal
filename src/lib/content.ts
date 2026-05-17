import { put, head } from "@vercel/blob";
import type { PortalContent } from "./types";
import { defaultContent } from "./default-content";
import { ARCA_IMAGES } from "./images";

const LEGACY_IMAGE_URL =
  "https://www.arcaroatan.com/wp-content/uploads/2024/01/arca-roatan-beach-hotel-hero.jpg";

const CONTENT_BLOB_PATHNAME = "content.json";

function normalizeContent(content: PortalContent): PortalContent {
  const welcome = { ...content.welcome };
  if (
    !welcome.backgroundImage ||
    welcome.backgroundImage === LEGACY_IMAGE_URL ||
    welcome.backgroundImage.includes("2024/01/arca-roatan-beach-hotel-hero")
  ) {
    welcome.backgroundImage = ARCA_IMAGES.hero;
  }

  const media = {
    diningBanner: content.media?.diningBanner || ARCA_IMAGES.dining,
    eventsBanner: content.media?.eventsBanner || ARCA_IMAGES.pool,
    islandBanner: content.media?.islandBanner || ARCA_IMAGES.beach,
    islandInline: content.media?.islandInline || ARCA_IMAGES.beach,
    toursBanner: content.media?.toursBanner || ARCA_IMAGES.experiences,
  };

  return { ...content, welcome, media };
}

function isValidContent(data: unknown): data is PortalContent {
  if (!data || typeof data !== "object") return false;
  const c = data as PortalContent;
  return Boolean(c.welcome?.message && c.dining?.categories);
}

export async function getContent(): Promise<PortalContent> {
  try {
    const blob = await head(CONTENT_BLOB_PATHNAME);
    const res = await fetch(blob.url, { cache: "no-store" });
    const parsed = (await res.json()) as unknown;
    if (isValidContent(parsed)) return normalizeContent(parsed);
    throw new Error("Invalid content file");
  } catch {
    await saveContent(defaultContent);
    return normalizeContent(defaultContent);
  }
}

export async function saveContent(content: PortalContent): Promise<void> {
  await put(CONTENT_BLOB_PATHNAME, JSON.stringify(content, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
  });
}
