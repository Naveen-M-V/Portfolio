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
  title: "Naveen MV | Full Stack Developer & Systems Engineer",
  description:
    "Portfolio of Naveen MV — Full Stack Developer & Systems Engineer building production fintech platforms, enterprise HR systems, and immersive biomedical XR simulations.",
  keywords: [
    "Naveen MV",
    "Full Stack Developer",
    "Systems Engineer",
    "Fintech Lead Developer",
    "Flutter Developer",
    "React",
    "Next.js",
    "Node.js",
    "PostgreSQL",
    "Biomedical XR",
    "Unity",
  ],
  authors: [{ name: "Naveen MV", url: "https://github.com/Naveen-M-V" }],
  openGraph: {
    title: "Naveen MV | Full Stack Developer & Systems Engineer",
    description:
      "Naveen MV builds software end-to-end: architecture, databases, APIs, mobile apps, deployment, and biomedical XR simulations.",
    type: "website",
    locale: "en_US",
  },
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
