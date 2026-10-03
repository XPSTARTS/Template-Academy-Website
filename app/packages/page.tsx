import type { Metadata } from 'next';
import { PackagesPage } from '@/components/academy-pages';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('Course Packages & Sample Fees', 'Review sample course packages for IELTS, spoken English and entry-test preparation at Ilmora Academy in Lahore.', '/packages/');

export default function Page() { return <PackagesPage />; }
