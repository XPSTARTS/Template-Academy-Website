import type { Metadata } from 'next';
import { ProgramsPage } from '@/components/academy-pages';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('IELTS, MDCAT, ECAT & FSc Programs', 'Explore IELTS, MDCAT, ECAT, FSc and spoken English preparation programs at Ilmora Academy in Lahore.', '/programs/');

export default function Page() { return <ProgramsPage />; }
