import type { Metadata } from 'next';
import { FacultyPage } from '@/components/academy-pages';
import { pageMetadata } from '@/lib/seo';

export const metadata: Metadata = pageMetadata('Meet the Faculty', 'Meet the sample subject-specialist instructors and learn about the teaching approach at Ilmora Academy, Lahore.', '/faculty/');

export default function Page() { return <FacultyPage />; }
