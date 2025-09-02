import type { Metadata } from "next";
import "./css/globals.css";
import { inter } from "./css/layout.css";

export const metadata: Metadata = {
  title: "Parker Precision Web",
  description: "Custom Apps For Your Business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/tattoo_studio_bkg.jpg"
          as="image"
          type="image/jpeg"
        />
        <link
          rel="preload"
          href="https://zcal.co/dallasjamesparker/web-consult"
          as="document"
        />
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//zcal.co" />
        <link rel="preconnect" href="https://zcal.co" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
