import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zubaida Digital Marketing Specialist | Local SEO Expert',
  description: 'Local SEO Expert for small businesses. Get better Google visibility, more local leads, calls, and customers with optimized SEO and Google Business Profile support.',
  metadataBase: new URL('https://zubaidadigital.com'),
  openGraph: {
    title: 'Zubaida Digital Marketing Specialist',
    description: 'Local SEO Expert focused on Google visibility, local search optimization, and growth for local businesses.',
    type: 'website',
    url: 'https://zubaidadigital.com',
    siteName: 'Zubaida Digital Marketing Specialist',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zubaida Digital Marketing Specialist',
    description: 'Local SEO Specialist helping local businesses get more visibility, leads, calls, and customers from Google.',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zubaida Digital Marketing Specialist',
  alternateName: 'Local SEO Expert',
  url: 'https://zubaidadigital.com',
  description:
    'Professional Local SEO Consultant helping local businesses improve Google visibility, Google Business Profile performance, and website conversions.',
  serviceType: 'Local SEO Services',
  areaServed: 'Local businesses',
  keywords: [
    'Local SEO Expert',
    'Digital Marketing Specialist',
    'Google Business Profile Optimization',
    'Local Search Optimization',
    'Technical SEO',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
