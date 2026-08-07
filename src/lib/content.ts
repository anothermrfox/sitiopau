export function titleFromMarkdown(body: string) {
  return body.match(/^#\s+(.+)$/m)?.[1]?.trim() ?? 'Sin título';
}

export function descriptionFromMarkdown(body: string) {
  const withoutHeading = body.replace(/^#\s+.+$/m, '').trim();
  const paragraph = withoutHeading
    .split(/\n\s*\n/)
    .find((block) => !block.startsWith('#') && !block.startsWith('-') && !block.startsWith('>'));

  return paragraph?.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/[*_`]/g, '').trim() ?? '';
}

export function dateFromId(id: string) {
  const match = id.match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;
  return new Date(`${match[1]}-${match[2]}-${match[3]}T12:00:00`);
}

export function slugFromId(id: string) {
  return id.replace(/\.md$/, '').replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export function formatDate(date: Date | null) {
  if (!date) return '';
  return new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
