import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: "Selphlyze - Discover Your True Self with AI-Powered Psychology",
    template: "%s | Selphlyze"
  },
  description: "Unlock the mysteries of your mind with AI-powered psychological analysis. Get personalized insights, discover your unique SelfCode, and understand your personality traits through scientific assessment.",
  keywords: [
    "psychology test",
    "personality analysis", 
    "AI psychology",
    "self discovery",
    "personality traits",
    "psychological assessment",
    "SelfCode",
    "personality test",
    "psychological insights"
  ],
  authors: [{ name: "Selphlyze Team" }],
  creator: "Selphlyze",
  publisher: "Selphlyze",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://selphlyze.com',
    siteName: 'Selphlyze',
    title: 'Selphlyze - Discover Your True Self with AI-Powered Psychology',
    description: 'Unlock the mysteries of your mind with AI-powered psychological analysis. Get personalized insights and discover your unique SelfCode.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Selphlyze - AI-Powered Psychological Analysis',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Selphlyze - Discover Your True Self with AI-Powered Psychology',
    description: 'Unlock the mysteries of your mind with AI-powered psychological analysis. Get personalized insights and discover your unique SelfCode.',
    images: ['/og-image.jpg'],
    creator: '@selphlyze',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
  category: 'Psychology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#008080" />
        <meta name="color-scheme" content="light" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Selphlyze",
              "description": "AI-powered psychological analysis platform for self-discovery",
              "url": "https://selphlyze.com",
              "applicationCategory": "HealthApplication",
              "operatingSystem": "Web",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Selphlyze"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
