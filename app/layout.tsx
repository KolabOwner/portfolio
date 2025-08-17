import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Building amazing things",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Personal Portfolio",
    description: "Building amazing things",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Personal Portfolio",
    description: "Building amazing things",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="py-8 sm:py-12 md:py-16 lg:py-20">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  );
}
