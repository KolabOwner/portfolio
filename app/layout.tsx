import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "Building amazing things",
  viewport: "width=device-width, initial-scale=1",
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
      </body>
    </html>
  );
}
