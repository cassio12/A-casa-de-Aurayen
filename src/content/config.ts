import { defineCollection, z } from 'astro:content';

const baseContentSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string(),
  description: z.string().optional(),
});

const cronicas = defineCollection({
  type: 'content',
  schema: baseContentSchema,
});

const personagens = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    race: z.string().optional(),
    faction: z.string().optional(),
  }),
});

const racas = defineCollection({
  type: 'content',
  schema: baseContentSchema,
});

const faccoes = defineCollection({
  type: 'content',
  schema: baseContentSchema,
});

const mapas = defineCollection({
  type: 'content',
  schema: baseContentSchema,
});

const eventos = defineCollection({
  type: 'content',
  schema: baseContentSchema,
});

export const collections = {
  cronicas,
  personagens,
  racas,
  faccoes,
  mapas,
  eventos,
};
