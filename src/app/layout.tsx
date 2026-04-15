import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { CursorHighlight } from "@/components/portfolio/cursor-highlight";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naveen MV | Full Stack Developer",
  description:
    "Full Stack Developer portfolio showcasing scalable business systems, booking platforms, HRMS, and production-grade applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="dark"
    >
      <body className="min-h-full flex flex-col">
        <CursorHighlight />
        {children}
      </body>
    </html>
  );
}
