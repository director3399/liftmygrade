import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import ScrollRestorationFix from "./ScrollRestorationFix";

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
  title: "LIFTMYGRADE | Global Academic Ecosystem & Mentorship",
  description:
    "Premium academic guidance for Bachelor's, Master's, and Fully Funded PhD journeys abroad. Structured mentorship for your global academic growth.",
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
      </body>
    </html>
  );
}
