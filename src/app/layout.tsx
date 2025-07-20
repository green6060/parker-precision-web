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
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
