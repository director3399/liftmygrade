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
  metadataBase: new URL("https://www.liftmygrade.com"),
  title: "LIFTMYGRADE | Global Academic Ecosystem & Mentorship",
  icons: {
    icon: "/favicon-1.webp",
    shortcut: "/favicon-1.webp",
    apple: "/favicon-1.webp",
  },
  description:
    "Premium academic guidance for Bachelor's, Master's, and PhD journeys abroad. Structured mentorship for your global academic growth.",
  alternates: {
    canonical: "https://www.liftmygrade.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.liftmygrade.com",
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "@id": "https://www.liftmygrade.com/#organization",
    name: "LiftmyGrade",
    alternateName: "LiftMyGrade LLP",
    url: "https://www.liftmygrade.com",
    logo: "https://www.liftmygrade.com/icon.webp",
    description:
      "Global academic ecosystem providing PhD-level thesis and dissertation mentorship, research publication guidance, and study abroad admissions support (SOP, LOR, CV).",
    sameAs: [
      "https://www.instagram.com/liftmygrade",
      "https://www.linkedin.com/company/lift-my-grade/",
      "https://www.facebook.com/share/1YvxK4wTn7/?mibextid=wwXIfr",
      "https://www.youtube.com/@LiftMyGrade",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9147720702",
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  };

  const sitewideNavSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SiteNavigationElement",
        name: "Academic Services",
        description: "Thesis help, dissertation guidance, publication support & admissions.",
        url: "https://www.liftmygrade.com/services",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Study Abroad Readiness Assessment",
        description: "Free profile evaluation and strategic pathway roadmap.",
        url: "https://www.liftmygrade.com/readiness-assessment",
      },
      {
        "@type": "SiteNavigationElement",
        name: "How We Work",
        description: "Step-by-step milestone-based academic mentorship process.",
        url: "https://www.liftmygrade.com/how-we-work",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Professional & Career Services",
        description: "Executive resumes, CV writing, and career branding.",
        url: "https://www.liftmygrade.com/career-services",
      },
      {
        "@type": "SiteNavigationElement",
        name: "Academic Insights & Guides",
        description: "Expert articles on SOPs, PhD proposals, and study abroad strategies.",
        url: "https://www.liftmygrade.com/blogs",
      },
      {
        "@type": "SiteNavigationElement",
        name: "What to Expect",
        description: "Transparent commitments and mentorship standards.",
        url: "https://www.liftmygrade.com/what-to-expect",
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(sitewideNavSchema) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ScrollRestorationFix />
        {children}
        <FloatingContactIcons />
      </body>
    </html>
  );
}
