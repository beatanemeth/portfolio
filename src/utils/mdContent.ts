import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { calculateReadingTime } from './readingTime';

// Helper to consolidate reading and parsing logic
const readMarkdownFile = (filePath: string) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return matter(fileContent);
};

export const getMarkdownContent = <T>(fileName: string) => {
  // 1. Resolve path to your markdown file in src/data
  const filePath = path.join(process.cwd(), 'src/data', fileName);
  // 2. Read the file content
  // 3. Parse frontmatter and content body
  const { data, content } = readMarkdownFile(filePath);
  // 4. Return both as a single object
  return { data: data as T, content };
};

export type BlogCategory = 'engineering' | 'insights' | 'signals';

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
  category: BlogCategory;
  readingTime: string;
  featured: boolean;
}

export const getAllBlogPosts = (): PostMetadata[] => {
  const baseDirectory = path.join(process.cwd(), 'src/data/blog');
  const categories: BlogCategory[] = ['engineering', 'insights'];
  const posts: PostMetadata[] = [];

  categories.forEach((category) => {
    const categoryDir = path.join(baseDirectory, category);
    if (!fs.existsSync(categoryDir)) return;

    const fileNames = fs.readdirSync(categoryDir);

    fileNames.forEach((fileName) => {
      if (!fileName.endsWith('.md')) return;

      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(categoryDir, fileName);
      const { data, content } = readMarkdownFile(fullPath);

      const readingTime = calculateReadingTime(content);
      const featured = slug === 'the-butterfly-in-the-ide';

      posts.push({
        ...(data as Omit<
          PostMetadata,
          'slug' | 'category' | 'readingTime' | 'featured'
        >),
        slug,
        category,
        readingTime,
        featured,
      });
    });
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getBlogPostBySlug = <T>(slug: string) => {
  const baseDirectory = path.join(process.cwd(), 'src/data/blog');
  const categories: BlogCategory[] = ['engineering', 'insights'];

  for (const category of categories) {
    const filePath = path.join(baseDirectory, category, `${slug}.md`);
    if (fs.existsSync(filePath)) {
      const { data, content } = readMarkdownFile(filePath);
      const readingTime = calculateReadingTime(content);
      return { data: data as T, content, category, readingTime };
    }
  }

  throw new Error(`Post with slug ${slug} not found`);
};

export interface Signal {
  headline: string;
  content: string;
}

export const getSignals = (): Signal[] => {
  const filePath = path.join(process.cwd(), 'src/data/blog/signals/signals.md');
  if (!fs.existsSync(filePath)) return [];
  const { data } = readMarkdownFile(filePath);
  return (data.signals || []) as Signal[];
};
