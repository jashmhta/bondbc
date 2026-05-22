import type { Metadata, Viewport } from "next";
import { Fraunces, Geist, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { Nav } from "@/components/shared/Nav";
import { Footer } from "@/components/shared/Footer";
import { ScrollProgress } from "@/components/motion/ScrollProgress";
import { GsapProvider } from "@/components/motion/GsapProvider";
import { LenisProvider } from "@/components/motion/LenisProvider";
import { CustomCursor } from "@/components/motion/CustomCursor";
import { PageLoader } from "@/components/motion/PageLoader";
import { BRAND } from "@/lib/brand";

// ─── Fonts ──────────────────────────────────────────────────────────────
// Display — Fraunces with full variable axes (opsz, SOFT, WONK)
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

// Italic emphasis & pull quotes
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

// Body — Geist (Vercel's workhorse, characterful enough)
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  display: "swap",
});

// Numerical / data — JetBrains Mono (with slashed-zero variant)
const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// ─── Metadata ───────────────────────────────────────────────────────────
const SITE_URL = "https://binarybonds.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: BRAND.meta.title,
    template: "%s — Binary Bonds",
  },
  description: BRAND.meta.description,
  keywords: [...BRAND.meta.keywords],
  authors: [{ name: BRAND.parent }],
  creator: BRAND.parentEntity,
  publisher: BRAND.parentEntity,
  formatDetection: { telephone: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: BRAND.name,
    title: BRAND.meta.title,
    description: BRAND.meta.description,
    url: SITE_URL,
    locale: "en_IN",
    images: [
      {
        url: "/brand/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${BRAND.name} — ${BRAND.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: BRAND.meta.title,
    description: BRAND.meta.description,
    images: ["/brand/og-image.jpg"],
    site: "@binarybonds",
    creator: "@binarycapital",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.ico",
    apple: "/brand/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fefcf6" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1318" },
  ],
};

// ─── Structured data (JSON-LD) ──────────────────────────────────────────
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: BRAND.name,
  alternateName: ["Binary Bonds", "BinaryBonds"],
  description: BRAND.meta.description,
  url: SITE_URL,
  logo: `${SITE_URL}/brand/logo.png`,
  telephone: BRAND.contact.phone,
  email: BRAND.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BRAND.contact.address.line1,
    addressLocality: BRAND.contact.address.city,
    addressRegion: BRAND.contact.address.state,
    addressCountry: "IN",
  },
  parentOrganization: { "@type": "Organization", name: BRAND.parent, url: "https://binarycapital.in" },
  serviceType: [
    "Bond Underwriting",
    "Government Securities",
    "Corporate Bonds",
    "Bond Portfolio Management",
    "Credit Rating Advisory",
    "Secondary Market Trading",
  ],
  areaServed: "IN",
  currenciesAccepted: "INR",
  sameAs: ["https://binarycapital.in"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: BRAND.name,
  url: SITE_URL,
};

// ─── Root layout ────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${instrumentSerif.variable} ${geist.variable} ${jetbrains.variable}`}
    >
      <head>
        {/* No-flash theme — sync script runs before paint to avoid FOUC.
            Also guarantees `.dark` class exists on first render so CSS vars
            resolve to the correct theme on older browsers. */}
        <script
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('bb-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var t=s||(d?'dark':'dark');if(t==='dark'){document.documentElement.classList.add('dark');}}catch(e){document.documentElement.classList.add('dark');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        <ThemeProvider defaultTheme="dark">
          <GsapProvider>
            <LenisProvider>
              <PageLoader />
              <CustomCursor />
              <ScrollProgress />
              <Nav />
              <main id="main" className="flex-1">
                {children}
              </main>
              <Footer />
            </LenisProvider>
          </GsapProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
