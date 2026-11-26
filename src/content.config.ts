import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const chapters = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/chapters' }),
  schema: z.object({
    title: z.string(),
    subject: z.string(),
    semester: z.number().min(1).max(8),
    chapterNo: z.number().optional(),
    /** core = asked often / must know, support = good to know */
    level: z.enum(['core', 'support']).default('core'),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    minutes: z.number().default(8),
    updated: z
      .union([z.string(), z.date()])
      .transform((value) => (typeof value === 'string' ? value : value.toISOString().slice(0, 10)))
      .optional(),
  }),
});

export const collections = { chapters };
