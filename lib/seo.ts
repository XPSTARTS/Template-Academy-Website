import type { Metadata } from 'next';
import { academy } from '@/lib/site-data';

const shareImagePath = '/images/ilmora-hero.webp';

export function pageMetadata(title: string, description: string, path: string): Metadata {
  const canonical = academy.siteUrl ? `${academy.siteUrl}${path}` : undefined;
  const image = academy.siteUrl ? `${academy.siteUrl}${shareImagePath}` : undefined;
  return {
    title,
    description,
    ...(canonical ? { alternates: { canonical } } : {}),
    openGraph: {
      type: 'website', siteName: academy.name, title, description,
      ...(canonical ? { url: canonical } : {}),
      ...(image ? { images: [{ url: image, width: 1600, height: 900, alt: 'Students preparing together at Ilmora Academy' }] } : {}),
    },
    twitter: { card: 'summary_large_image', title, description, ...(image ? { images: [image] } : {}) },
  };
}
