import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title: 'Ashton Gage - Computer Engineering Student & Full-Stack Developer',
  description: 'Cal Poly Computer Engineering student building RezumAI, an AI-powered career platform. Experienced in Next.js, TypeScript, Firebase, and AI integration.',
  keywords: 'Ashton Gage, Cal Poly, Computer Engineering, RezumAI, Full-Stack Developer, Software Engineer',
  authors: [{ name: 'Ashton Gage' }],
  creator: 'Ashton Gage',
  publisher: 'Ashton Gage',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ashtongage.com',
    siteName: 'Ashton Gage Portfolio',
    title: 'Ashton Gage - Computer Engineering Student & Full-Stack Developer',
    description: 'Building AI-powered tools while studying at Cal Poly',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ashton Gage - Full-Stack Developer',
    description: 'Building RezumAI and studying Computer Engineering at Cal Poly',
    creator: '@ashton_gage',
  },
  alternates: {
    canonical: 'https://ashtongage.com',
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
