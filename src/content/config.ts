import { defineCollection, z } from 'astro:content';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    image: z.string().nullish(),
  }),
});

export const collections = {
  'articles': articlesCollection,
};
