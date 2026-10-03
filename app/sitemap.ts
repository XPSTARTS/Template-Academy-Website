import type { MetadataRoute } from 'next';
import { academy } from '@/lib/site-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!academy.siteUrl) return [];
  const routes = ['', '/about/', '/programs/', '/faculty/', '/packages/', '/location/', '/contact/'];
  return routes.map((route) => ({ url: `${academy.siteUrl}${route}`, changeFrequency: 'monthly', priority: route === '' ? 1 : 0.7 }));
}
