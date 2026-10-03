import type { Metadata } from 'next';
import { LocationPage } from '@/components/academy-pages';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('Location & Visiting Hours', 'Find the sample Ilmora Academy location in Gulberg, Lahore, check visiting hours and open directions.', '/location/');

export default function Page() { return <LocationPage />; }
