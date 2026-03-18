import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MDO3 Digital - Spiritual, Professional & Productivity Tools",
  description: "Discover our collection of AI-powered platforms for spiritual guidance, career development, and productivity enhancement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-900 text-white">
        {children}
      </body>
    </html>
  );
}
