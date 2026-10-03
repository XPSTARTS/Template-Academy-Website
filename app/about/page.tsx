import type { Metadata } from 'next';
import { AboutPage } from '@/components/academy-pages';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('Our Approach', 'Discover Ilmora Academy’s student-first approach to focused exam preparation and learning in Lahore.', '/about/');

export default function Page() { return <AboutPage />; }
