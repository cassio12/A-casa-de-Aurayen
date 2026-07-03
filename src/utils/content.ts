import { getCollection, type CollectionEntry } from 'astro:content';

export type ContentCollectionName =
  | 'cronicas'
  | 'personagens'
  | 'racas'
  | 'faccoes'
  | 'mapas'
  | 'eventos';

async function safeGetCollection<T extends ContentCollectionName>(
  collection: T,
): Promise<CollectionEntry<T>[]> {
  try {
    return await getCollection(collection);
  } catch {
    return [];
  }
}

export async function getSortedEntries<T extends ContentCollectionName>(
  collection: T,
): Promise<CollectionEntry<T>[]> {
  const entries = await safeGetCollection(collection);
  return entries.sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime(),
  );
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function getEntrySlug(entry: CollectionEntry<ContentCollectionName>): string {
  return entry.slug;
}
