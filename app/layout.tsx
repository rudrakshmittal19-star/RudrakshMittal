import type { Metadata } from "next";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import "@fontsource/playfair-display/500-italic.css";
import "@fontsource/caveat/500.css";
import "@fontsource/ibm-plex-sans/400.css";
import "@fontsource/ibm-plex-sans/500.css";
import "@fontsource/ibm-plex-sans/600.css";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Rudraksh Mittal",
  description:
    "I build AI systems and full-stack products that turn messy data into something real.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-ink font-sans text-fg-ink antialiased">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
