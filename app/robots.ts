import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://locksmith-dubai.com/sitemap.xml',
    host: 'https://locksmith-dubai.com',
  };
}
