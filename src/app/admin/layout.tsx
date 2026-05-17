import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Arca Guest Portal",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-linen font-body text-charcoal">{children}</div>
  );
}
