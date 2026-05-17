import { GuestPortal } from "@/components/GuestPortal";
import { getContent } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const content = await getContent();
  return <GuestPortal content={content} />;
}
