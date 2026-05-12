import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const getMarkdownContent = <T>(fileName: string) => {
  // 1. Resolve path to your markdown file in src/data
  const filePath = path.join(process.cwd(), 'src/data', fileName);
  // 2. Read the file content
  const fileContent = fs.readFileSync(filePath, 'utf8');
  // 3. Parse frontmatter and content body
  const { data, content } = matter(fileContent);
  // 4. Return both as a single object
  return { data: data as T, content };
};
