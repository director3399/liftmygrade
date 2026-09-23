import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollRestorationFix from "./ScrollRestorationFix";
import FloatingContactIcons from "@/components/FloatingContactIcons";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://liftmygrade.com"),
  title: "LIFTMYGRADE | Global Academic Ecosystem & Mentorship",
  icons: {
    icon: "/favicon-1.webp",
    shortcut: "/favicon-1.webp",
    apple: "/favicon-1.webp",
  },
  description:
    "Premium academic guidance for Bachelor's, Master's, and PhD journeys abroad. Structured mentorship for your global academic growth.",
  alternates: {
    canonical: "https://liftmygrade.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://liftmygrade.com",
    siteName: "LiftmyGrade",
    title: "LIFTMYGRADE | Global Academic Ecosystem & Mentorship",
    description:
      "Premium academic guidance for Bachelor's, Master's, and PhD journeys abroad. Structured mentorship for your global academic growth.",
    images: [
      {
        url: "/icon.webp",
        width: 512,
        height: 512,
        alt: "LiftmyGrade Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiftMyGrade | Thesis, Dissertation & Publication Help by PhD Experts",
    description:
      "Thesis, dissertation, and publication help by PhD-level experts — plus admissions support for Bachelor’s, Master’s, and PhD applicants. Every project verified.",
    images: ["/icon.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>
        <ScrollRestorationFix />
        {children}
        <FloatingContactIcons />
      </body>
    </html>
  );
}
