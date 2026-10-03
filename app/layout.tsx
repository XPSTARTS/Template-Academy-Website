import type { Metadata, Viewport } from 'next';
import { SiteFooter, SiteHeader } from '@/components/site-shell';
import { FloatingWhatsApp } from '@/components/interactions';
import { academy } from '@/lib/site-data';
import './globals.css';

const description = 'Thoughtful IELTS, MDCAT, ECAT and FSc preparation in Lahore. Find your next step with Ilmora Academy.';
const siteUrl = academy.siteUrl;
const shareImage = siteUrl ? `${siteUrl}/images/ilmora-hero.webp` : undefined;

export const metadata: Metadata = {
  title: { default: 'Prepare With Purpose', template: '%s | Ilmora Academy' },
  description,
  applicationName: academy.name,
  keywords: ['academy in Lahore', 'IELTS preparation Lahore', 'MDCAT academy Lahore', 'ECAT preparation', 'FSc tuition Lahore'],
  icons: { icon: '/favicon.svg' },
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  openGraph: {
    type: 'website', siteName: academy.name, title: 'Prepare With Purpose | Ilmora Academy', description,
    ...(shareImage ? { images: [{ url: shareImage, width: 1600, height: 900, alt: 'Students preparing together at Ilmora Academy' }] } : {}),
  },
  twitter: { card: 'summary_large_image', title: 'Prepare With Purpose | Ilmora Academy', description, ...(shareImage ? { images: [shareImage] } : {}) },
};

export const viewport: Viewport = { themeColor: '#174c3b', width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en-PK"><body><a className="skip-link" href="#main-content">Skip to content</a><SiteHeader /><main id="main-content">{children}</main><SiteFooter /><FloatingWhatsApp /></body></html>;
}
