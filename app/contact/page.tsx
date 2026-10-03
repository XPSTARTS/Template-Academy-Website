import type { Metadata } from 'next';
import { ContactPage } from '@/components/academy-pages';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('Contact & Admissions', 'Contact Ilmora Academy admissions on WhatsApp to ask about courses, batch timings, fees and visits in Lahore.', '/contact/');

export default function Page() { return <ContactPage />; }
