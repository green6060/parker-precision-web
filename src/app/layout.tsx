import type { Metadata } from "next";
import "./css/globals.css";
import { geistMono, geistSans } from "./css/layout.css";

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-2xl font-extrabold`}
      >
        {children}
      </body>
    </html>
  );
}
