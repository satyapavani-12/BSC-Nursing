import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { chapterPath, parseChapterId, subjectBySlug } from '@data/subjects';

export const GET: APIRoute = async () => {
  const chapters = await getCollection('chapters');

  const items = chapters.map((entry) => {
    const { semester, subjectSlug, slug } = parseChapterId(entry.id);
    const subject = subjectBySlug.get(subjectSlug);
    const text = (entry.body ?? '')
      .replace(/^import\s.+$/gm, ' ')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[#*_>`|]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 1200);

    return {
      title: entry.data.title,
      summary: entry.data.summary,
      subject: subject?.title ?? subjectSlug,
      subjectSlug,
      semester,
      level: entry.data.level,
      tags: entry.data.tags,
      url: chapterPath(semester, subjectSlug, slug),
      text,
    };
  });

  return new Response(JSON.stringify(items), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
