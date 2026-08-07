import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const ideas = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './contenido/ideas' }),
});

export const collections = { ideas };
