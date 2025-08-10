import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

interface NotesPageProps {
  params: { slug?: string[] };
}

export default async function NotesPage({ params }: NotesPageProps) {
  const tag = params.slug?.[0] || null;
  const initialNotes = await fetchNotes({
    page: 1,
    perPage: 12,
    ...(tag && tag !== 'All' ? { tag } : {}),
  });

  return <NotesClient initialNotes={initialNotes} initialTag={tag} />;
}
