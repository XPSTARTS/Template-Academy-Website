import type { Metadata } from 'next';
import { HomePage } from '@/components/academy-pages';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('Ilmora Academy | Prepare With Purpose', 'Thoughtful IELTS, MDCAT, ECAT and FSc preparation in Lahore. Find your next step with Ilmora Academy.', '/');

export default function Page() { return <HomePage />; }
