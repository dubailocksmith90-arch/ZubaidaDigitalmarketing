import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://locksmith-dubai.com'),
  title: 'Lock Repair Satwa | Fast Locksmith Services in Dubai',
  description:
    'Professional locksmith services in Satwa, Dubai. Lock repair, lock replacement, door opening, key services, and emergency locksmith assistance. Call +971 52 642 6161.',
  keywords: [
    'Lock Repair Satwa',
    'Emergency locksmith Dubai',
    'Locksmith in Satwa',
    'Lock replacement Dubai',
    'Door opening service Dubai',
    'Key services Dubai',
    'Lock installation Dubai',
  ],
  applicationName: 'Lock Repair Satwa',
  alternates: {
    canonical: 'https://locksmith-dubai.com',
  },
  openGraph: {
    title: 'Lock Repair Satwa | Fast Locksmith Services in Dubai',
    description:
      'Professional locksmith services in Satwa, Dubai. Lock repair, lock replacement, door opening, key services, and emergency locksmith assistance.',
    url: 'https://locksmith-dubai.com',
    siteName: 'Lock Repair Satwa',
    locale: 'en_US',
    type: 'website',
    images: [{ url: '/og-locksmith.svg', width: 1200, height: 630, alt: 'Lock Repair Satwa locksmith service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lock Repair Satwa',
    description: 'Fast and reliable locksmith services in Satwa, Dubai.',
    images: ['/og-locksmith.svg'],
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lock Repair Satwa',
  image: 'https://locksmith-dubai.com/og-locksmith.svg',
  telephone: '+971526426161',
  url: 'https://locksmith-dubai.com',
  description:
    'Professional locksmith services in Satwa, Dubai including lock repair, lock replacement, door opening, key services, and emergency locksmith assistance.',
  areaServed: ['Satwa', 'Dubai', 'UAE'],
  priceRange: '$$',
  openingHours: 'Mo-Su 00:00-23:59',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'AE',
    addressLocality: 'Dubai',
    streetAddress: 'Satwa, Dubai, UAE',
  },
  makesOffer: {
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: 'Locksmith Services',
      areaServed: ['Satwa', 'Dubai'],
      serviceType: 'Locksmith Service',
    },
  },
  keywords: [
    'Lock Repair Satwa',
    'Emergency locksmith Dubai',
    'Locksmith in Satwa',
    'Lock replacement Dubai',
    'Door opening service Dubai',
    'Key services Dubai',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
