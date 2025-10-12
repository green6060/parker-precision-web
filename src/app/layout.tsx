import type { Metadata } from "next";
import "./css/globals.css";
import { inter } from "./css/layout.css";

export const metadata: Metadata = {
  title: "Parker Precision Web | Tattoo Websites That Book More Clients",
  description: "Professional websites for tattoo artists. Showcase your work, convert visitors, and get booked. Easy booking, mobile-ready design, and local SEO optimization.",
  keywords: ["tattoo websites", "tattoo artist portfolio", "tattoo booking", "custom web design", "tattoo marketing"],
  authors: [{ name: "Parker Precision Web" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://parkerprecisionweb.netlify.app/",
    siteName: "Parker Precision Web",
    title: "Parker Precision Web | Tattoo Websites That Book More Clients",
    description: "Professional websites for tattoo artists. Showcase your work, convert visitors, and get booked.",
    images: [
      {
        url: "https://parkerprecisionweb.netlify.app/tattoo_studio_bkg.jpg",
        width: 1200,
        height: 630,
        alt: "Parker Precision Web - Tattoo Websites",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parker Precision Web | Tattoo Websites That Book More Clients",
    description: "Professional websites for tattoo artists. Showcase your work, convert visitors, and get booked.",
    images: ["https://parkerprecisionweb.netlify.app/tattoo_studio_bkg.jpg"],
  },
  metadataBase: new URL("https://parkerprecisionweb.netlify.app"),
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
