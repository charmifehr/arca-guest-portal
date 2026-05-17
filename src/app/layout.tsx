import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arca Guest Portal | Roatán",
  description:
    "Your in-room guide to Arca — dining, events, island tips, and curated excursions.",
  metadataBase: new URL("https://guests.arcaroatan.com"),
  openGraph: {
    title: "Arca Guest Portal",
    description: "Your guide to making the most of your stay at Arca, Roatán.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#F7F3ED",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${lora.variable}`}
    >
      <body className="font-body">{children}</body>
    </html>
  );
}
