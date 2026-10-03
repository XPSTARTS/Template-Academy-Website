import type { MetadataRoute } from 'next';
import { academy } from '@/lib/site-data';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    ...(academy.siteUrl ? { sitemap: `${academy.siteUrl}/sitemap.xml`, host: academy.siteUrl } : {}),
  };
}
