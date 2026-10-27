import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://leadscorpio.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "LeadScorpio — B2B Lead Generation & Outbound Sales Pipeline",
    template: "%s | LeadScorpio",
  },
  description:
    "LeadScorpio helps B2B companies build predictable outbound pipelines through targeted LinkedIn outreach, cold email, cold calling, and qualified appointment setting.",
  keywords: [
    "B2B lead generation",
    "outbound sales",
    "LinkedIn outreach",
    "cold email agency",
    "cold calling",
    "appointment setting",
    "sales pipeline",
  ],
  authors: [{ name: "LeadScorpio" }],
  creator: "LeadScorpio",
  publisher: "LeadScorpio",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "LeadScorpio — B2B Lead Generation & Outbound Sales Pipeline",
    description:
      "Reach relevant decision-makers through targeted prospecting, personalized outreach, and structured follow-up to generate qualified sales conversations.",
    url: siteUrl,
    siteName: "LeadScorpio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LeadScorpio B2B Outbound Sales Pipeline",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LeadScorpio — B2B Lead Generation & Outbound Sales Pipeline",
    description:
      "Reach relevant decision-makers through targeted prospecting, personalized outreach, and structured follow-up to generate qualified sales conversations.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "LeadScorpio",
    url: siteUrl,
    logo: `${siteUrl}/logo-dark.png`,
    image: `${siteUrl}/og-image.png`,
    description:
      "Specialized B2B outbound lead generation agency providing targeted LinkedIn outreach, cold email campaigns, cold calling, and qualified appointment setting.",
    email: "leadscorpioofficial@gmail.com",
    areaServed: "Global",
    serviceType: [
      "LinkedIn Outreach",
      "Cold Email Marketing",
      "Cold Calling",
      "Appointment Setting",
      "Lead Qualification",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground selection:bg-[var(--color-brand-copper)]/30">
        {children}
      </body>
    </html>
  );
}
