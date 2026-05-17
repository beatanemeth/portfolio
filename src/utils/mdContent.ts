import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

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

export interface PostMetadata {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  image?: string;
}

export const getAllBlogPosts = (): PostMetadata[] => {
  const postsDirectory = path.join(process.cwd(), 'src/data/blog');
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const { data } = readMarkdownFile(fullPath);

    return {
      ...(data as Omit<PostMetadata, 'slug'>),
      slug,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
};
