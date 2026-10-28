import type { MetadataRoute } from 'next';
import { cities } from '@/data/cities';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://kingisepp.rest-vanna.ru';

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date();
  return [
    { url: SITE_URL, lastModified: today, changeFrequency: 'weekly', priority: 1 },
    ...cities.map(c => ({
      url: `${SITE_URL}/${c.slug}`,
      lastModified: today,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ];
}